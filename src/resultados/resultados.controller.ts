import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ResultadosService } from './resultados.service';

@Controller('resultados')
export class ResultadosController {
    constructor(private resultadosService: ResultadosService){}
    
    @Get(':idfecha')
    getResultados(@Param('idfecha', ParseIntPipe) idfecha: number){
        return this.resultadosService.getResultados(idfecha);
    }

}