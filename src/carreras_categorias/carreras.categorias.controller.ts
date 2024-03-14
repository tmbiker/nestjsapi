import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarrerasCategoriasService } from './carreras.categorias.service';

@Controller('carreras_categorias')

export class CarrerasCategoriasController {

    constructor(private readonly carrerasCategoriasService: CarrerasCategoriasService){ }
    
    @Get(':idfecha')
    getCarrerasCategorias(@Param('idfecha', ParseIntPipe) idfecha: number){
        return this.carrerasCategoriasService.getCarrerasCategorias(idfecha);
    }

}