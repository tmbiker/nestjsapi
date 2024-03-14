import { Controller, Get, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { CorredoresService } from './corredores.service';
import { NuevoCorredoresDto }  from './dto/nuevocorredores.dto'


@Controller('corredores')
export class CorredoresController {

    constructor(private corredoresService: CorredoresService){}
    
    @Get(':doc_numero')
    getCorredores(@Param('doc_numero', ParseIntPipe) doc_numero: number){
        return this.corredoresService.getCorredores(doc_numero);
    }

    @Post()
    nuevoCorredores(@Body() nuevoCorredores: NuevoCorredoresDto){
        console.log(nuevoCorredores)
       return this.corredoresService.nuevoCorredores(nuevoCorredores)
    }
}