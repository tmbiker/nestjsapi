import { Controller, Get, Param, ParseIntPipe, Post, Body, Header} from '@nestjs/common';
import { CorredoresService } from './corredores.service';
import { NuevoCorredoresDto }  from './dto/nuevocorredores.dto'


@Controller('corredores')
export class CorredoresController {

    constructor(private corredoresService: CorredoresService){ 

    }

    @Post('/nuevo')
    @Header('Cache-Control', 'none')
    create(): string {
        return 'This action adds a new cat';
    }

    //async nuevoCorredores(@Body() nuevoCorredores: NuevoCorredoresDto){
    //   return this.corredoresService.nuevoCorredores(nuevoCorredores)
    //}
    
    @Get('buscar/:doc_numero')
    getCorredores(@Param('doc_numero', ParseIntPipe) doc_numero: number){
        return this.corredoresService.getCorredores(doc_numero);
    }

}