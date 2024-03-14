import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { InscripcionesService } from './inscripciones.service';
import { CreateInscripcionesDto } from './dto/createInscripciones.dto';
import { UpdateInscripcionesDto } from './dto/updateInscripciones.dto';

@Controller('inscripciones')

export class InscripcionesController {

    constructor(private inscripcionesService: InscripcionesService){

    }
    
    @Get(':limit/:offset')
    getInscripciones(@Param('limit', ParseIntPipe) limit: number, @Param('offset', ParseIntPipe) offset: number){
        return this.inscripcionesService.getInscripciones(limit, offset);
    }

    @Get(':idregistro')
    getInscripcion(@Param('idregistro', ParseIntPipe) idregistro: number){
        return this.inscripcionesService.getInscripcion(idregistro);
    }

    @Post()
    createInscripciones(@Body() nuevaInscripciones: CreateInscripcionesDto){
        return this.inscripcionesService.createInscripciones(nuevaInscripciones)
    }

    @Delete(':idregistro')
    deleteInscripciones(@Param('idregistro', ParseIntPipe) idregistro: number){
        return this.inscripcionesService.deleteInscripciones(idregistro)
    }

    @Patch(':idregistro')
    updateInscripciones(@Param('idregistro', ParseIntPipe) idregistro: number, @Body() inscripciones: UpdateInscripcionesDto){
        return this.inscripcionesService.updateInscripciones(idregistro, inscripciones)
    }

}
