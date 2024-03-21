import { Body, Controller, Param, Post, Put, Header, Get, ParseIntPipe, ValidationPipe, UsePipes, HttpCode, HttpStatus} from '@nestjs/common';
import { NuevoCorredoresDto }  from './dto/nuevocorredores.dto';
import { CorredoresService } from './corredores.service';
import { ConsoleLogResponse } from '../decorators.ts/console.log.response.decorator';

@Controller('corredores')
export class CorredoresController {
    constructor(private readonly corredoresService: CorredoresService){ 

    }

    @Get('buscar/:doc_numero')
    getCorredores(@Param('doc_numero', ParseIntPipe) doc_numero: number){
        return this.corredoresService.getCorredores(doc_numero);
    }

    @Post('nuevo')
    @ConsoleLogResponse()
    @Header('Cache-Control', 'none')
    @UsePipes(ValidationPipe)
    @HttpCode(HttpStatus.NO_CONTENT)
    nuevoCorredores(@Body() nuevoCorredores: NuevoCorredoresDto){
       return this.corredoresService.nuevoCorredores(nuevoCorredores);
    }

    @Put('modificar/:doc_numero')
    @UsePipes(ValidationPipe)
    modificarCorredores(@Param('doc_numero', ParseIntPipe) doc_numero: number, @Body() nuevoCorredores: NuevoCorredoresDto){
       return this.corredoresService.modificarCorredores(doc_numero, nuevoCorredores);
    }
}