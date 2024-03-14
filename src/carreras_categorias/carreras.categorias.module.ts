import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrerasCategorias } from './carreras.categorias.entity';
import { CarrerasCategoriasController } from './carreras.categorias.controller';
import { CarrerasCategoriasService } from './carreras.categorias.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarrerasCategorias])],
  controllers: [CarrerasCategoriasController],
  providers: [CarrerasCategoriasService]
})

export class CarrerasCategoriasModule {}