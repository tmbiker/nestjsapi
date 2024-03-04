import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categorias } from './categorias.entity';

@Injectable()
export class CategoriasService {

    constructor(@InjectRepository(Categorias) private readonly categoriasRepository: Repository<Categorias>){}

    async getCategorias(){

        try {

            const categoriasFound = this.categoriasRepository
            .createQueryBuilder("categoriasFound")
            .select(["c.idcategoria", "c.categoria"])
            .from(Categorias, "c")
            .where("c.orden != 0")
            .leftJoinAndSelect("c.inscripcion", "i", "i.idcategoria = c.idcategoria")
            .orderBy("c.orden")
            .getMany();

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