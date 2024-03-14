import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipos } from './equipos.entity';

@Injectable()
export class EquiposService {

    constructor(@InjectRepository(Equipos) private equiposRepository: Repository<Equipos>){}

    async getEquipos() {

        try {

            const equiposFound = this.equiposRepository.query(
                'SELECT CAST(e.idequipo AS CHARACTER) id, e.nombre, e.provincia, e.imagen FROM equipos e ORDER BY e.nombre ASC'
            )
            return equiposFound;

        } catch (error) {

            return new HttpException("Equipos No Existen", HttpStatus.NOT_FOUND)
        
        }
    }
}