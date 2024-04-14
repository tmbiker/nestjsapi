import { Body, Controller, Param, Post, Res, Put, Header, Get, ParseIntPipe, ValidationPipe, UsePipes, HttpCode, HttpStatus} from '@nestjs/common';
import { NuevoCorredoresDto }  from './dto/nuevocorredores.dto';
import { ModificarCorredoresDto }  from './dto/modificarcorredores.dto';
import { CorredoresService } from './corredores.service';
import { Response } from 'express';

@Controller('corredores')
export class CorredoresController {
    constructor(private readonly corredoresService: CorredoresService){ 

    }

    @Get('buscar/:doc_numero')
    async getCorredores(@Param('doc_numero', ParseIntPipe) doc_numero: number){
        return this.corredoresService.getCorredores(doc_numero);
    }

    @Post('nuevo')
    @UsePipes(ValidationPipe)
    async nuevoCorredores(@Body() nuevoCorredoresDto: NuevoCorredoresDto, @Res() res: Response){
        const{error, message, nuevoCorredores, statuscode} = await this.corredoresService.nuevoCorredores(nuevoCorredoresDto);
        return res.status(statuscode).send({error: error, message: message, data: nuevoCorredores, statusCode: statuscode})
    }

    @Put('modificar/:doc_numero')
    @UsePipes(ValidationPipe)
    async modificarCorredores(@Param('doc_numero', ParseIntPipe) doc_numero: number, @Body() modificarCorredores: ModificarCorredoresDto){
       return this.corredoresService.modificarCorredores(doc_numero, modificarCorredores);
    }

}