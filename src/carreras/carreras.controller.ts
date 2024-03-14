import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarrerasService } from './carreras.service';

@Controller('carreras')
export class CarrerasController {

    constructor(private carrerasService: CarrerasService){}
    
    @Get()
    getCarreras(){
        return this.carrerasService.getCarreras();
    }

}