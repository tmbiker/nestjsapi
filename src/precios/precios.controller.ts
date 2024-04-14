import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PreciosService } from './precios.service';

@Controller('precios')
export class PreciosController {
    constructor(private readonly preciosService: PreciosService){ }
    
    @Get()
    getPrecios(){
        return this.preciosService.getPrecios();
    }
}