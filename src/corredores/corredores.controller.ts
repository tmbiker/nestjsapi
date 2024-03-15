import { Controller, Get, Param, ParseIntPipe, Put, Post, Body, Header, ValidationPipe, UsePipes} from '@nestjs/common';
import { CorredoresService } from './corredores.service';
import { NuevoCorredoresDto }  from './dto/nuevocorredores.dto'


@Controller('biker')
export class CorredoresController {

    constructor(private corredoresService: CorredoresService){ 

    }

    @Post('nuevo')
    @Header('Cache-Control', 'none')
    @UsePipes(ValidationPipe)
    async nuevoCorredores(@Body() nuevoCorredores: NuevoCorredoresDto){
       return this.corredoresService.nuevoCorredores(nuevoCorredores)
    }

    @Put('modificar/:doc_numero')
    @UsePipes(ValidationPipe)
    async modificarCorredores(@Param('doc_numero', ParseIntPipe) doc_numero: number, @Body() nuevoCorredores: NuevoCorredoresDto){
       return this.corredoresService.modificarCorredores(doc_numero, nuevoCorredores)
    }
    
    @Get('buscar/:doc_numero')
    getCorredores(@Param('doc_numero', ParseIntPipe) doc_numero: number){
        return this.corredoresService.getCorredores(doc_numero);
    }

}