import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CategoriasInscService } from './categoriasinsc.service';

@Controller('categoriasinsc')
export class CategoriasInscController {
    constructor(private readonly categoriasInscService: CategoriasInscService){ }
    
    @Get(':sexo1/:sexo2/:anio1/:anio2')
    getCategorias(@Param('sexo1') sexo1: String, @Param('sexo2') sexo2: String, @Param('anio1', ParseIntPipe) anio1: number, @Param('anio2', ParseIntPipe) anio2: number){
        return this.categoriasInscService.getCategorias(sexo1, sexo2, anio1, anio2);
    }
}