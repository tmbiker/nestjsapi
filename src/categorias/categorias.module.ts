import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorias } from './categorias.entity';
import { Inscripciones } from '../inscripciones/inscripciones.entity';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';

@Module({
  imports: [TypeOrmModule.forFeature([Categorias, Inscripciones])],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})

export class CategoriasModule {}