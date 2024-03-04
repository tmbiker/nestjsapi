import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Origen } from './origen.entity';

@Injectable()
export class OrigenService {

    @InjectRepository(Origen) private origenRepository: Repository<Origen>

    async getOrigen(){

        try {

            const origenFound = this.origenRepository
            .createQueryBuilder("origenFound")
            .select(["o.id", "o.lugar", "o.siglas"])
            .from(Origen, "o")
            .orderBy("o.lugar")
            .getMany();

            return origenFound;

        } catch (error) {

            return new HttpException("Origen No Existe", HttpStatus.NOT_FOUND)
        
        }

    }
}