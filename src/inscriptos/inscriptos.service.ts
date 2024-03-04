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

    async getInscriptos(){

        try {

            const inscriptosFound1 = this.inscriptosRepository
            .createQueryBuilder("inscriptosFound1")
            .select(["i.idregistro", "i.nombre", "i.apellido", "i.provincia"])
            .from(Inscriptos, "i")
            .leftJoinAndSelect('i.idbiker1', 'insc1', "insc1.idcorredor = i.idregistro")
            .leftJoinAndSelect('i.idbiker2', 'insc2', "insc2.idregistro = i.idregistro")
            .where('insc1.pagado != :pagado', {pagado: 0})
            .orderBy("i.apellido")
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
