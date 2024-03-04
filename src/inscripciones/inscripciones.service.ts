import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Inscripciones } from './inscripciones.entity';
import { CreateInscripcionesDto } from './dto/createInscripciones.dto';
import { UpdateInscripcionesDto } from './dto/updateInscripciones.dto';


@Injectable()
export class InscripcionesService {

    constructor(@InjectRepository(Inscripciones) private inscripcionesRepository: Repository<Inscripciones>){}

    async createInscripciones(inscripciones: CreateInscripcionesDto){

        const inscripcionesFound = await this.inscripcionesRepository.findOne({
            where: {
                idregistro: inscripciones.idregistro
            }
        })

        if (inscripcionesFound){
            return new HttpException("Inscripcion ya Existe", HttpStatus.CONFLICT)
        }

        const newInscripciones = this.inscripcionesRepository.create(inscripciones);
        return this.inscripcionesRepository.save(newInscripciones)

    }

    async getInscripciones(){

        try {

            const inscripcionesFound = this.inscripcionesRepository
            .createQueryBuilder("inscripcionesFound")
            .select(["i.idregistro", "i.idtramite", "i.placa", "i.idcategoria", "i.pagado", "i.idequipo"])
            .from(Inscripciones, "i")
            .where("i.pagado != :pagado",{pagado: 0})
            .leftJoinAndSelect('i.biker1', 'ito1', "ito1.idregistro = i.idcorredor")
            .leftJoinAndSelect('i.biker2', 'ito2', "ito2.idcorredor = i.idcorredor")
            .leftJoinAndSelect('i.equipo', 'equi', "equi.idequipo = i.idequipo")
            .leftJoinAndSelect('i.categoria', 'ctg', "ctg.idcategoria = i.idcategoria")
            .orderBy("i.idtramite")
            .addOrderBy("i.pagado")
            .getMany();
            
            return inscripcionesFound;

        } catch (error) {

            return new HttpException("Inscripciones No Existen", HttpStatus.NOT_FOUND)

        }

    }

    async getInscripcion(idregistro: number){
        
        const inscripcionesFound = await this.inscripcionesRepository.findOne({
            where: {
                idregistro: idregistro,
            },
        });

        if(!inscripcionesFound){
            return new HttpException("Inscripcion No Existe", HttpStatus.NOT_FOUND)
        }

        return inscripcionesFound;

    }

    async deleteInscripciones(idregistro: number){
        const result = await this.inscripcionesRepository.delete({idregistro: idregistro});;

        if(result.affected === 0){
            return new HttpException("Inscripcion No Existe", HttpStatus.NOT_FOUND)
        }

        return result
        
    }

    async updateInscripciones(idregistro: number, inscripciones: UpdateInscripcionesDto){
        const inscripcionesFound = await this.inscripcionesRepository.findOne({
            where: {
                idregistro: idregistro,
            },
        });

        if(!inscripcionesFound){
            return new HttpException("Inscripcion No Existe", HttpStatus.NOT_FOUND)
        }

        const updateInscripciones = Object.assign(inscripcionesFound, inscripciones)

        return this.inscripcionesRepository.save(updateInscripciones)
    }
}