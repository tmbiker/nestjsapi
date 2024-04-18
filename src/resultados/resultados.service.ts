import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resultados } from './resultados.entity';

@Injectable()

export class ResultadosService {

    @InjectRepository(Resultados) private readonly resultadosRepository: Repository<Resultados>

    async getResultados(idfecha: number, anio: number, limit: number, offset: number, categoria: string){

        try {

            const corredores    = "corredores" + anio.toString();
            const inscripciones = "inscripciones" + anio.toString();

            limit.toString();
            offset.toString();

            if (categoria = "Todas"){
                const resultadosFound = this.resultadosRepository.query(
                    'SELECT CAST(r.idregistro AS CHARACTER) id, CAST(r.pscgrl AS CHARACTER) pscgrl, CAST(r.pscctg AS CHARACTER) pscctg, CAST(r.pscgrl_total AS CHARACTER) pscgrl_total, CAST(r.idcategoria AS CHARACTER) idcategoria, CAST(r.placa AS CHARACTER) placa, r.total, r.dif1ctg, r.difantctg, r.dif1grl, r.difantgrl, CAST(r.foto AS CHARACTER) foto, CAST(r.id_event_foto AS CHARACTER) id_event_foto, CAST(r.idfecha AS CHARACTER) idfecha, CAST(i.idcorredor AS CHARACTER) idcorredor, CAST(i.idcategoria AS CHARACTER) idcategoria, CAST(c1.doc_numero AS CHARACTER) doc_numero1, c1.nombre as nombre1, c1.apellido as apellido1, c1.provincia as provincia1, c1.imagen as imagen1, CAST(c1.idequipo AS CHARACTER) idequipo1, e1.nombre as equipo1, CAST(c2.doc_numero AS CHARACTER) doc_numero2, c2.nombre as nombre2, c2.apellido as apellido2, c2.provincia as provincia2, c2.imagen as imagen2, CAST(c2.idequipo AS CHARACTER) idequipo2, e2.nombre as equipo2, ctg.categoria FROM resultados r INNER JOIN ' + inscripciones + ' i ON i.placa = r.placa INNER JOIN categorias ctg ON ctg.idcategoria = r.idcategoria INNER JOIN ' + corredores + ' c1 ON c1.idregistro = i.idcorredor LEFT JOIN ' + corredores + ' c2 ON c2.idcorredor = i.idcorredor LEFT JOIN equipos e1 ON e1.idregistro = c1.idequipo LEFT JOIN equipos e2 ON e2.idequipo = c2.idequipo WHERE r.idfecha = ? GROUP BY i.placa ORDER BY r.pscgrl_total ASC, pscctg ASC LIMIT ? OFFSET ?;',
                    [idfecha, limit, offset]
                )
                return resultadosFound;
            } else {
                const resultadosFound = this.resultadosRepository.query(
                    'SELECT CAST(r.idregistro AS CHARACTER) id, CAST(r.pscgrl AS CHARACTER) pscgrl, CAST(r.pscctg AS CHARACTER) pscctg, CAST(r.pscgrl_total AS CHARACTER) pscgrl_total, CAST(r.idcategoria AS CHARACTER) idcategoria, CAST(r.placa AS CHARACTER) placa, r.total, r.dif1ctg, r.difantctg, r.dif1grl, r.difantgrl, CAST(r.foto AS CHARACTER) foto, CAST(r.id_event_foto AS CHARACTER) id_event_foto, CAST(r.idfecha AS CHARACTER) idfecha, CAST(i.idcorredor AS CHARACTER) idcorredor, CAST(i.idcategoria AS CHARACTER) idcategoria, CAST(c1.doc_numero AS CHARACTER) doc_numero1, c1.nombre as nombre1, c1.apellido as apellido1, c1.provincia as provincia1, c1.imagen as imagen1, CAST(c1.idequipo AS CHARACTER) idequipo1, e1.nombre as equipo1, CAST(c2.doc_numero AS CHARACTER) doc_numero2, c2.nombre as nombre2, c2.apellido as apellido2, c2.provincia as provincia2, c2.imagen as imagen2, CAST(c2.idequipo AS CHARACTER) idequipo2, e2.nombre as equipo2, ctg.categoria FROM resultados r INNER JOIN ' + inscripciones + ' i ON i.placa = r.placa INNER JOIN categorias ctg ON ctg.idcategoria = r.idcategoria INNER JOIN ' + corredores + ' c1 ON c1.idregistro = i.idcorredor LEFT JOIN ' + corredores + ' c2 ON c2.idcorredor = i.idcorredor LEFT JOIN equipos e1 ON e1.idregistro = c1.idequipo LEFT JOIN equipos e2 ON e2.idequipo = c2.idequipo WHERE r.idfecha = ? and ctg.categoria = ? GROUP BY i.placa ORDER BY r.pscgrl_total ASC, pscctg ASC LIMIT ? OFFSET ?;',
                    [idfecha, categoria, limit, offset]
                )
                return resultadosFound;
            }

        } catch (error) {
            return new HttpException("Resultados No Existen", HttpStatus.NOT_FOUND)
        }
    }
}