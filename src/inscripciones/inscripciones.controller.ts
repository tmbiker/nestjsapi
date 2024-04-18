import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch, Res } from '@nestjs/common';
import { InscripcionesService } from './inscripciones.service';
import { CreateInscripcionesDto } from './dto/createInscripciones.dto';
import { UpdateInscripcionesDto } from './dto/updateInscripciones.dto';
import { Response } from 'express';

@Controller('inscripciones')

export class InscripcionesController {

    constructor(private inscripcionesService: InscripcionesService){

    }
    
    @Get('todas/:limit/:offset/:categoria')
    getInscripciones(@Param('limit', ParseIntPipe) limit: number, @Param('offset', ParseIntPipe) offset: number, @Param('categoria') categoria){
        return this.inscripcionesService.getInscripciones(limit, offset, categoria);
    }

    @Get(':idregistro')
    getInscripcion(@Param('idregistro', ParseIntPipe) idregistro: number){
        return this.inscripcionesService.getInscripcion(idregistro);
    }

    @Post('inscripcion')
    async createInscripciones(@Body() nuevaInscripciones: CreateInscripcionesDto, @Res() res: Response){
        const{error, message, nuevoCorredor, statuscode} = await this.inscripcionesService.createInscripciones(nuevaInscripciones);
        return res.status(statuscode).send({error: error, message: message, data: nuevoCorredor, statusCode: statuscode})
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
