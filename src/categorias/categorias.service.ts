import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categorias } from './categorias.entity';

@Injectable()
export class CategoriasService {

    constructor(@InjectRepository(Categorias) private readonly categoriasRepository: Repository<Categorias>){}

    async getCategorias(){

        try {

            const categoriasFound = this.categoriasRepository.query(
                'SELECT CAST(c.idcategoria as CHARACTER) id, "30" AS idfecha, "2024" AS anio, CAST(c.idcategoria AS CHARACTER) idcategoria, c.categoria AS nombre FROM categorias c WHERE c.orden != 0 ORDER BY c.orden_importancia;',
            )

            return categoriasFound;

        } catch (error) {

            return new HttpException("Categorias No Existe", HttpStatus.NOT_FOUND)
        
        }
    }

    async getCategoria(idcategoria: number){
        
        console.log(idcategoria);

        try {
            const categoriasFound = this.categoriasRepository
            .createQueryBuilder("categoriasFound")
            .select(["c.idcategoria", "c.categoria"])
            .from(Categorias, "c")
            .leftJoinAndSelect("c.inscripcion", "i", "i.idcategoria = c.idcategoria")
            .where("c.orden != 0")
            .andWhere("c.idcategoria = :idcategoria", { idcategoria: idcategoria})
            .orderBy("c.orden")
            .getMany();

            if(!categoriasFound){
                return new HttpException("Categorias No Existe", HttpStatus.NOT_FOUND)
            }

            return categoriasFound;

        } catch (error) {

            return new HttpException("Categorias No Existe", HttpStatus.NOT_FOUND)
        
        }
   
    }
}