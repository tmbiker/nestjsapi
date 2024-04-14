import { Body, Controller, Param, Post, Res, Put, Header, Get, ParseIntPipe, ValidationPipe, UsePipes, HttpCode, HttpStatus} from '@nestjs/common';
import { InscripcionNuevoCorredorDto } from './dto/inscripcionnuevocorredor.dto';
import { InscripcionCorredorService } from './inscripcioncorredor.service';
import { Response } from 'express';

@Controller('inscripcioncorredor')
export class InscripcionCorredorController {
    constructor(private readonly inscripcionCorredorService: InscripcionCorredorService){ 

    }

    @Post('nuevocorredor')
    @UsePipes(ValidationPipe)
    async inscripcionNuevoCorredor(@Body() inscripcionNuevoCorredorDto: InscripcionNuevoCorredorDto, @Res() res: Response){
        const{error, message, nuevoCorredor, statuscode} = await this.inscripcionCorredorService.inscripcionNuevoCorredor(inscripcionNuevoCorredorDto);
        return res.status(statuscode).send({error: error, message: message, data: nuevoCorredor, statusCode: statuscode})
    }
}