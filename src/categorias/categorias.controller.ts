import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('ctg')
export class CategoriasController {
    constructor(private readonly categoriasService: CategoriasService){ }
    
    @Get(':doc_numero1')
    getCategorias(){
        return this.categoriasService.getCategorias();
    }

    @Get(':idcategoria')
    getCategoria(@Param('idcategoria', ParseIntPipe) idcategoria: number){
        return this.categoriasService.getCategoria(idcategoria);
    }

}