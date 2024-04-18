import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InscripcionNuevoCorredorDto } from './dto/inscripcionnuevocorredor.dto';
import { Corredores2024 } from './inscripcioncorredor.entity';

@Injectable()
export class InscripcionCorredorService {

    constructor(@InjectRepository(Corredores2024) private inscripcionCorredorRepository: Repository<Corredores2024>){}

    async inscripcionNuevoCorredor(inscripcionNuevoCorredorDto: InscripcionNuevoCorredorDto){

        const nuevoCorredor = this.inscripcionCorredorRepository.create(inscripcionNuevoCorredorDto);
        const inscNuevoCorredor = await this.inscripcionCorredorRepository.save(nuevoCorredor)

        try {
            const nuevoCorredor = await this.inscripcionCorredorRepository.query(
                'SELECT c.idregistro AS idcorredor, c.idregistro AS idtramite FROM corredores2024 c WHERE c.doc_numero = ? ORDER BY c.idregistro DESC LIMIT 1;',
                [inscripcionNuevoCorredorDto.doc_numero]
            )

            console.log(nuevoCorredor);
            
            return {error: "Exito", message:"Grabado con Exito", nuevoCorredor, statuscode: 200};

        } catch (error) {

            const mensaje = "Corredor No Grabado";

            return {error: "noExito", message: mensaje, nuevoCorredor, statuscode: 400};
        }
    }
}