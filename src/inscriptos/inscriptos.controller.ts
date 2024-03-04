import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { InscriptosService } from './inscriptos.service';
import { CreateInscriptosDto }  from './dto/createinscriptos.dto'

@Controller('inscriptos')
export class InscriptosController {

    constructor(private readonly inscriptosService: InscriptosService){}
    
    @Get()
    getInscriptos(){
        return this.inscriptosService.getInscriptos();
    }

    @Get(':idregistro')
    getInscripto(@Param('idregistro', ParseIntPipe) idregistro: number){
        return this.inscriptosService.getInscripto(idregistro);
    }

    @Post()
    createInscriptos(@Body() nuevosInscriptos: CreateInscriptosDto){
        return this.inscriptosService.createInscriptos(nuevosInscriptos)
    }
}