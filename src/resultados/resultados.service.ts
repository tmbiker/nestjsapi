import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resultados } from './resultados.entity';

@Injectable()

export class ResultadosService {

    @InjectRepository(Resultados) private readonly resultadosRepository: Repository<Resultados>

    async getResultados(idfecha: number){

        try {

            const resultadosFound = this.resultadosRepository
            .createQueryBuilder("resultadosFound")
            .select(["r.pscctg", "r.pscgrl", "r.pscgrl_total", "r.placa", "r.nombre", "r.provincia", "r.total"])
            .from(Resultados, "r")
            .where('r.idfecha = :idfecha',{idfecha: idfecha})
            .andWhere('r.pscctg = :pscctg',{pscctg: 1})
            .leftJoinAndSelect('r.categoria', 'ctg', "ctg.idcategoria = r.idcategoria")
            .orderBy("r.pscgrl_total")
            .getMany();

            return resultadosFound;

        } catch (error) {

            return new HttpException("Resultados No Existen", HttpStatus.NOT_FOUND)
        
        }
    }
}