import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InscripcionNuevoCorredorDto } from './dto/inscripcionnuevocorredor.dto';
import { Corredores2024 } from './inscripcioncorredor.entity';

const tabla_corredores = process.env.CORREDORES

@Injectable()
export class InscripcionCorredorService {

    constructor(@InjectRepository(Corredores2024) private inscripcionCorredorRepository: Repository<Corredores2024>){}

    async inscripcionNuevoCorredor(inscripcionNuevoCorredorDto: InscripcionNuevoCorredorDto){

        const nuevoCorredor = this.inscripcionCorredorRepository.create(inscripcionNuevoCorredorDto);
        const inscNuevoCorredor = this.inscripcionCorredorRepository.save(nuevoCorredor)

        try {
            const nuevoCorredor = this.inscripcionCorredorRepository.query(
                'SELECT CAST(c.idregistro AS CHARACTER) idcorredor, CAST(c.idregistro AS CHARACTER) idtramite FROM ? c WHERE c.doc_numero = ? ORDER BY c.idregistro DESC LIMIT 1;',
                [tabla_corredores, inscripcionNuevoCorredorDto.doc_numero]
            )
            
            return {error: "Exito", message:"Grabado con Exito", nuevoCorredor, statuscode: 200};

        } catch (error) {

            const mensaje = new HttpException("Corredor1 No Grabado", HttpStatus.NOT_FOUND)

            return {error: "noExito", message: mensaje, nuevoCorredor, statuscode: 400};
        }
    }
}