import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ResultadosService } from './resultados.service';

@Controller('resultados')
export class ResultadosController {
    constructor(private resultadosService: ResultadosService){}
    
    @Get(':idfecha/:anio/:limit/:offset/:categoria')
    getResultados(@Param('idfecha', ParseIntPipe) idfecha: number, @Param('anio', ParseIntPipe) anio: number, @Param('limit', ParseIntPipe) limit: number, @Param('offset', ParseIntPipe) offset: number, @Param('categoria') categoria){
        return this.resultadosService.getResultados(idfecha, anio, limit, offset, categoria);
    }

}