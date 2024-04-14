import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, Repository, MoreThanOrEqual, MoreThan, LessThan, Between, DataSource } from 'typeorm';
import { Categorias } from '../categorias/categorias.entity';
import { Categorias_Tabla } from './categoriasinsc.entity';

@Injectable()
export class CategoriasInscService {

    constructor(@InjectRepository(Categorias) private readonly categoriasRepository: Repository<Categorias>,
                @InjectRepository(Categorias_Tabla) private readonly categorias_TablaRepository: Repository<Categorias_Tabla>){}

    async getCategorias(sexo1: String, sexo2: String, anio1: number, anio2: number){

        // Diferenciar Trasmontaña de Trasmontañita
        // Diferencia Generos
        // 1 - Hombres
        // 2 - Mixto
        // 3 - Enduro, E-Bikes, Promocionales
        // 4 - Mujeres

        var genero = 0
        var idcategoria = 0
        var idcategoria1 = 0
        var idcategoria2 = 0
        var anioPeH = 0

        var idcategoriaPeH = 0
        var idcategoria1EB = 0
        var idcategoria2EB = 0
        var idcategoriaEB = 0
        let aniomenor = 2009
        const fecha = new Date()
        // Para el Promedio de Edad Mixtos
        const anioActual = fecha.getFullYear()

        try {

            if (anio1>=aniomenor || anio2>=aniomenor){
               	// SON MENORES
            	// MENORES A - MENORES B - PROMOCIONALES - PADRE E HIJOS A

                console.log("aqui ingreso")


            } else {

                if (sexo1 == sexo2){
                    if (sexo1 == "Mujer"){
                        // DAMAS - Genero 4
                        // La más competitiva
                        // Según Tablas de Categorías
                        genero = 4
                    } else {
                        // CABALLEROS - Genero 1
                        // La más competitiva
                        // Según Tablas de Categorías
                        genero = 1
                    }

                    try {
                        const categoria1Found = await this.categoriasRepository
                            .createQueryBuilder("categoria1")
                            .select('c.idcategoria')
                            .from(Categorias, 'c')
                            .where('c.genero = :genero && c.fecha_desde <= :aniof && c.fecha_hasta >= :anioh && c.orden > 0', {genero: genero, aniof: anio1, anioh: anio1})
                            .getOne();

                            if (categoria1Found){
                                idcategoria1 = categoria1Found.idcategoria
                            }
    
                    } catch (error) {
                        return new HttpException("Categoria1 No Existe", HttpStatus.NOT_FOUND)
                    }

                    try {
                        const categoria2Found = await this.categoriasRepository
                            .createQueryBuilder("categoria2")
                            .select('c.idcategoria')
                            .from(Categorias, 'c')
                            .where('c.genero = :genero && c.fecha_desde <= :aniof && c.fecha_hasta >= :anioh && c.orden > 0', {genero: genero, aniof: anio2, anioh: anio2})
                            .getOne();

                            if (categoria2Found){
                                idcategoria2 = categoria2Found.idcategoria
                            }
    
                    } catch (error) {
                        return new HttpException("Categoria2 No Existe", HttpStatus.NOT_FOUND)
                    }

                    if (idcategoria1 != 0 && idcategoria2 !=0){
                        try {
                            const categoriaTFound = await this.categorias_TablaRepository
                                .createQueryBuilder("categoriat")
                                .select('c.idcategoria')
                                .from(Categorias_Tabla, 'c')
                                .where('c.idcategoria1 = :idcategoria1 && c.idcategoria2 = :idcategoria2', {idcategoria1: idcategoria1, idcategoria2: idcategoria2})
                                .getOne();
                            
                            if (categoriaTFound){
                                idcategoria = categoriaTFound.idcategoria
                            }
        
                        } catch (error) {
                            return new HttpException("Categoria2 No Existe", HttpStatus.NOT_FOUND)
                        }
                    }

                } else {

                    // MIXTOS / Promedio de Edad
                    
                    genero = 2

                    const panio1 = Number((anioActual-anio1).toFixed(2))
                    const panio2 = Number((anioActual-anio2).toFixed(2))
                    const panio  = Number(((panio1+panio2)/2).toFixed(2))
                    anio1  = Number((anioActual-panio ).toFixed(0))

                    try {
                        const categoriaFound = await this.categoriasRepository
                            .createQueryBuilder("categoria2")
                            .select('c.idcategoria')
                            .from(Categorias, 'c')
                            .where('c.genero = :genero && c.fecha_desde <= :aniof && c.fecha_hasta >= :anioh && c.orden > 0', {genero: genero, aniof: anio1, anioh: anio1})
                            .getOne();

                            if (categoriaFound){
                                idcategoria = categoriaFound.idcategoria
                            }
    
                    } catch (error) {
                        return new HttpException("CategoriaMixtos No Existe", HttpStatus.NOT_FOUND)
                    }

                }

                // Definir la categoria Padre e Hijos

                if (genero==4){ 

                    // Hay una Mujer - PADRE E HIJAS

                    try {
                        const categoriaPeHFound = await this.categoriasRepository
                            .createQueryBuilder("categoriaPeH")
                            .select('c.idcategoria')
                            .from(Categorias, 'c')
                            .where('c.mostrar_siempre = 2')
                            .getOne();

                        if (categoriaPeHFound){
                            idcategoriaPeH = categoriaPeHFound.idcategoria
                        }
    
                    } catch (error) {
                        return new HttpException("CategoriaPeH No Existe", HttpStatus.NOT_FOUND)
                    }

                } else {

                    // SON DOS HOMBRES

                    if (anio1>anio2){
                        anioPeH = anio2;
                    } else {
                        anioPeH = anio1;
                    }
                    // PADRE E HIJOS B y C
                    try {
                        const categoriaPeHFound = await this.categoriasRepository
                            .createQueryBuilder("categoriaPeH")
                            .select('c.idcategoria')
                            .from(Categorias, 'c')
                            .where('c.mostrar_siempre = 3 && c.fecha_desde <= :aniof && c.fecha_hasta >= :anioh && c.orden > 0', {aniof: anioPeH, anioh: anioPeH})
                            .getOne();
 
                        if (categoriaPeHFound){
                            idcategoriaPeH = categoriaPeHFound.idcategoria
                        }
        
                    } catch (error) {
                        return new HttpException("CategoriaPeH No Existe", HttpStatus.NOT_FOUND)
                    }
                }

                // Definir la categoria E-Bikes
                // Genero = 3 define las categorias E-Bikes

                genero = 3

                try {
                    const categoria1Found = await this.categoriasRepository
                        .createQueryBuilder("categoria1")
                        .select('c.idcategoria')
                        .from(Categorias, 'c')
                        .where('c.genero = :genero && c.fecha_desde <= :aniof && c.fecha_hasta >= :anioh && c.orden > 0 && c.mostrar_siempre = 0', {genero: genero, aniof: anio1, anioh: anio1})
                        .getOne();

                        if (categoria1Found){
                            idcategoria1EB = categoria1Found.idcategoria
                        }

                } catch (error) {
                    return new HttpException("CategoriaEB1 No Existe", HttpStatus.NOT_FOUND)
                }

                try {
                    const categoria2Found = await this.categoriasRepository
                        .createQueryBuilder("categoria2")
                        .select('c.idcategoria')
                        .from(Categorias, 'c')
                        .where('c.genero = :genero && c.fecha_desde <= :aniof && c.fecha_hasta >= :anioh && c.orden > 0 && c.mostrar_siempre = 0', {genero: genero, aniof: anio2, anioh: anio2})
                        .getOne();

                        if (categoria2Found){
                            idcategoria2EB = categoria2Found.idcategoria
                        }

                    } catch (error) {

                        return new HttpException("CategoriaEB2 No Existe", HttpStatus.NOT_FOUND)

                    }

                if (idcategoria1EB != 0 && idcategoria2EB !=0){

                    try {

                        const categoriaEBFound = await this.categorias_TablaRepository
                            .createQueryBuilder("categoriaeb")
                            .select('c.idcategoria')
                            .from(Categorias_Tabla, 'c')
                            .where('c.idcategoria1 = :idcategoria1 && c.idcategoria2 = :idcategoria2', {idcategoria1: idcategoria1EB, idcategoria2: idcategoria2EB})
                            .getOne();

                            if (categoriaEBFound){
                                idcategoriaEB = categoriaEBFound.idcategoria
                            }

                        } catch (error) {
                            return new HttpException("CategoriaEB No Existe", HttpStatus.NOT_FOUND)
                        }
                }
            } 

            const categoriasInscFound = await this.categoriasRepository.query(
                'SELECT CAST(c.idcategoria AS CHARACTER) id, CAST(c.idcategoria AS CHARACTER) idcategoria, c.categoria, CAST(c.fecha_desde AS CHARACTER) AS anio_desde, CAST(c.fecha_hasta AS CHARACTER) anio_hasta FROM categorias c WHERE (c.orden > 0 and c.idcategoria = ?) or (c.orden > 0 and c.idcategoria = ?) or (c.orden > 0 and c.mostrar_siempre = ?) or (c.orden > 0 and c.idcategoria = ?);',
                [idcategoria, idcategoriaPeH, 1, idcategoriaEB]
            )

            return categoriasInscFound

        } catch (error) {
            return new HttpException("Categorias No Existe", HttpStatus.NOT_FOUND)
        }
    }
}