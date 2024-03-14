import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { InscriptosService } from './inscriptos.service';
import { CreateInscriptosDto }  from './dto/createinscriptos.dto'

@Controller('inscriptos')
export class InscriptosController {

    constructor(private readonly inscriptosService: InscriptosService){}
    
    @Get(':limit/:offset')
    getInscriptos(@Param('limit', ParseIntPipe) limit: number, @Param('offset', ParseIntPipe) offset: number){
        return this.inscriptosService.getInscriptos(limit, offset);
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