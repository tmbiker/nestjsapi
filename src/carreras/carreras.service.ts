import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carreras } from './carreras.entity';

@Injectable()
export class CarrerasService {

    @InjectRepository(Carreras) private carrerasRepository: Repository<Carreras>

    async getCarreras(){

        try {

            const carrerasFound = this.carrerasRepository.query(
                'SELECT CAST(idregistro AS CHARACTER) id, CAST(idfecha AS CHARACTER) idfecha, CAST(anio AS CHARACTER) anio, nombre FROM carreras WHERE habilitado = 0 ORDER BY anio DESC;'
            )
            return carrerasFound;

        } catch (error) {

            return new HttpException("Origen No Existe", HttpStatus.NOT_FOUND)
        
        }

    }
}