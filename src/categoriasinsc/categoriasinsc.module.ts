import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorias_Tabla } from './categoriasinsc.entity';
import { Categorias } from '../categorias/categorias.entity';
import { CategoriasInscController } from './categoriasinsc.controller';
import { CategoriasInscService } from './categoriasinsc.service';

@Module({
  imports: [TypeOrmModule.forFeature([Categorias]),TypeOrmModule.forFeature([Categorias_Tabla])],
  controllers: [CategoriasInscController],
  providers: [CategoriasInscService]
})

export class CategoriasInscModule {}