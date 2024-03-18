import { Controller, Param, Body, Post, Put, Header, Get, ParseIntPipe, ValidationPipe, UsePipes} from '@nestjs/common';
import { CorredoresService } from './corredores.service';
import { NuevoCorredoresDto }  from './dto/nuevocorredores.dto';

const express = require('express')
const router = express.Router()

router.post('/nuevo', (req, res) => {
    res.send('About Corredores')
})

@Controller('corredores')
export class CorredoresController {
    constructor(private readonly corredoresService: CorredoresService){ 

    }

    @Put('modificar/:doc_numero')
    @UsePipes(ValidationPipe)
    modificarCorredores(@Param('doc_numero', ParseIntPipe) doc_numero: number, @Body() nuevoCorredores: NuevoCorredoresDto){
       return this.corredoresService.modificarCorredores(doc_numero, nuevoCorredores);
    }

    @Get('buscar/:doc_numero')
    getCorredores(@Param('doc_numero', ParseIntPipe) doc_numero: number){
        return this.corredoresService.getCorredores(doc_numero);
    }

}