import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarrerasCategorias } from './carreras.categorias.entity';

@Injectable()
export class CarrerasCategoriasService {

    constructor(@InjectRepository(CarrerasCategorias) private readonly carrerasCategoriasRepository: Repository<CarrerasCategorias>){}

    async getCarrerasCategorias(idfecha: number){

        try {

            const carrerasCategoriasFound = this.carrerasCategoriasRepository.query(
                'SELECT CAST(c.idcategoria as CHARACTER) id, CAST(c.idfecha AS CHARACTER) idfecha, CAST(c.anio AS CHARACTER) anio, CAST(c.idcategoria AS CHARACTER) idcategoria, ctg.categoria AS nombre FROM carreras_categorias c INNER JOIN categorias ctg ON ctg.idcategoria = c.idcategoria WHERE c.idfecha = ? ORDER BY ctg.orden_importancia;',
                [idfecha]
            )

            return carrerasCategoriasFound;

        } catch (error) {

            return new HttpException("Categorias para esta Carrera No Existen", HttpStatus.NOT_FOUND)
        
        }
    }
   
}
