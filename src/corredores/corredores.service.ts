import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Corredores } from './corredores.entity';
import { NuevoCorredoresDto }  from './dto/nuevocorredores.dto'

@Injectable()
export class CorredoresService {

    constructor(@InjectRepository(Corredores) private corredoresRepository: Repository<Corredores>){}

    async nuevoCorredores(nuevoCorredores: NuevoCorredoresDto){
        const corredoresFound = await this.corredoresRepository.findOne({
            where: {
                doc_numero: nuevoCorredores.doc_numero
            }
        })
        if (corredoresFound){
            return new HttpException("Corredor ya Existe", HttpStatus.CONFLICT)
        }
        
        const nuevosInscriptos = this.corredoresRepository.create(nuevoCorredores);

        return this.corredoresRepository.save(nuevoCorredores)

    }

    async getCorredores(doc_numero: Number) {
        try {
            const corredoresFound = this.corredoresRepository.query(
                'SELECT CAST(c.idregistro AS CHARACTER) id, CAST(c.idregistro AS CHARACTER) idregistro, CAST(c.idcorredor AS CHARACTER) idcorredor, CAST(doc_numero AS CHARACTER) doc_numero, c.tipo_doc, c.nombre, c.apellido, c.domicilio, c.localidad, c.provincia, c.codigo_postal, c.telefono, c.genero, CAST(day(c.fecha_nacimiento) AS CHARACTER) dia, CAST(month(c.fecha_nacimiento) AS CHARACTER) mes, CAST(year(c.fecha_nacimiento) AS CHARACTER) anio, c.genero, c.email, c.c_telefono, c.c_celular, c.celular, c.pais, c.imagen, CAST(c.idequipo AS CHARACTER) idequipo, CAST(c.trofeo_mayor AS CHARACTER) trofeo_mayor, CAST(c.medallas_general AS CHARACTER) medallas_general, CAST(c.medallas_categorias AS CHARACTER) medallas_categorias FROM corredores c WHERE doc_numero = ?;',
                [doc_numero]
            )
            return corredoresFound;
        } catch (error) {
            return new HttpException("Corredor No Existe", HttpStatus.NOT_FOUND)
        }

    }
}