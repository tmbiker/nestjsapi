import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common';
import { PlacasService } from './placas.service';

@Controller('placas')
export class PlacasController {

    constructor(private placasService: PlacasService){}

    @Get(':idcategoria')
    getPlacas(@Param('idcategoria', ParseIntPipe) idcategoria: number){
        return this.placasService.getPlacas(idcategoria);
    }
}