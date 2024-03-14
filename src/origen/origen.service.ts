import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Origen } from './origen.entity';

@Injectable()
export class OrigenService {

    @InjectRepository(Origen) private origenRepository: Repository<Origen>

    async getOrigen(){

        try {

            const origenFound = this.origenRepository.query(
                'SELECT CAST(o.id AS CHARACTER) id, o.lugar, o.siglas FROM origen o ORDER BY o.lugar ASC'
            )
            return origenFound;

        } catch (error) {

            return new HttpException("Origen No Existe", HttpStatus.NOT_FOUND)
        
        }

    }
}