import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan} from 'typeorm';
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

    async getInscripciones(limit: number, offset: number){

        try {
            const corredores    = "corredores2024";
            const inscripciones = "inscripciones2024";

            const inscripcionesFound = this.inscripcionesRepository.query(
                'SELECT CAST(i.idtramite AS CHARACTER) id, CAST(i.idtramite AS CHARACTER) idtramite, CAST(i.idcategoria AS CHARACTER) idcategoria, CAST(i.placa AS CHARACTER) placa, CAST(i.pagado AS CHARACTER) pagado, CAST(i.estado AS CHARACTER) estado, i.horalargada, CAST(c1.doc_numero AS CHARACTER) doc_numero1, c1.nombre as nombre1, c1.apellido as apellido1, c1.provincia as provincia1, c1.imagen as imagen1, CAST(c1.idequipo AS CHARACTER) idequipo1, e1.nombre as equipo1, CAST(c2.doc_numero AS CHARACTER) doc_numero2, c2.nombre as nombre2, c2.apellido as apellido2, c2.provincia as provincia2, c2.imagen as imagen2, CAST(c2.idequipo AS CHARACTER) idequipo2, e2.nombre as equipo2, ctg.categoria FROM ' + inscripciones + ' i INNER JOIN ' + corredores + ' c1 on c1.idregistro = i.idcorredor LEFT JOIN ' + corredores + ' c2 ON c2.idcorredor = i.idcorredor INNER JOIN categorias ctg on ctg.idcategoria = i.idcategoria left join equipos e1 ON e1.idregistro = c1.idequipo left join equipos e2 on e2.idequipo = c2.idequipo WHERE i.pagado != 0 GROUP BY i.idtramite ORDER BY i.idtramite LIMIT ? OFFSET ?;',
                [limit, offset]
                )
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