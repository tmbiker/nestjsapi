import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipos } from './equipos.entity';

@Injectable()
export class EquiposService {

    constructor(@InjectRepository(Equipos) private equiposRepository: Repository<Equipos>){}

    async getEquipos() {

        try {

            const equiposFound = this.equiposRepository
            .createQueryBuilder("equiposFound")
            .select(["e.idequipo", "e.nombre", "e.provincia", "e.imagen"])
            .from(Equipos, "e")
            .where('e.idequipo != :idequipo',{idequipo: 0})
            .orderBy("e.nombre")
            .getMany();

            return equiposFound;

        } catch (error) {

            return new HttpException("Equipos No Existen", HttpStatus.NOT_FOUND)
        
        }
    }
}