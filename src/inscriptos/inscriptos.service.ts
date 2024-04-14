import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Inscriptos } from './inscriptos.entity';
import { CreateInscriptosDto }  from './dto/createinscriptos.dto';


@Injectable()
export class InscriptosService {

    constructor(
        @InjectRepository(Inscriptos) private readonly inscriptosRepository: Repository<Inscriptos>,){}

    async createInscriptos(inscriptos: CreateInscriptosDto){
        const inscriptosFound = await this.inscriptosRepository.findOne({
            where: {
                idregistro: inscriptos.idregistro
            }
        })
        if (inscriptosFound){
            return new HttpException("Inscripcion ya Existe", HttpStatus.CONFLICT)
        }
        
        const nuevosInscriptos = this.inscriptosRepository.create(inscriptos);
        return this.inscriptosRepository.save(nuevosInscriptos)
    }

    async getInscriptos(limit: number, offset: number){

        try {

            const inscriptosFound1 = this.inscriptosRepository
            .createQueryBuilder("inscriptosFound1")
            .select(["i.idregistro", "i.nombre" , "i.apellido", "i.provincia"])
            .from(Inscriptos, "i")
            .leftJoinAndSelect('i.idbiker', 'insc', "insc.idcorredor = i.idregistro")
            .where('insc1.pagado != :pagado', {pagado: 0})
            .andWhere('insc1.idcategoria = :idcategoria', {idcategoria: 7})
            .orderBy("i.apellido")
            .limit(limit)
            .offset(offset)
            .getMany();

            return inscriptosFound1;

        } catch (error) {

            return new HttpException("Pareja Inscripta No Existe", HttpStatus.NOT_FOUND)
        
        }

    }

    async getInscripto(idregistro: number){
        const inscriptosFound = await this.inscriptosRepository.findOne({
        });
        if(!inscriptosFound){
            return new HttpException("Pareja Inscripta No Existe", HttpStatus.NOT_FOUND)
        }
        return inscriptosFound;
    }
}
