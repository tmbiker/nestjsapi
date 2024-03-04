import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Placas } from './placas.entity';

@Injectable()
export class PlacasService {

    @InjectRepository(Placas) private placasRepository: Repository<Placas>

    async getPlacas(idcategoria: number){

        try {

            const placasFound = this.placasRepository
            .createQueryBuilder("placasFound")
            .select(["p.id", "p.estado", "p.idcategoria"])
            .from(Placas, "p")
            .where("p.idcategoria = :idcategoria",{idcategoria: idcategoria})
            .andWhere("p.estado = :estado", {estado: 0})
            .andWhere("p.activada = :activada", {activada: 1})
            .orderBy("p.id")
            .getMany();

            return placasFound;

        } catch (error) {

            return new HttpException("Placas No Existe", HttpStatus.NOT_FOUND)
        
        }

    }
}