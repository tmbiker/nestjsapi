import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InscripcionesController } from './inscripciones.controller';
import { InscripcionesService } from './inscripciones.service';
import { Inscripciones } from './inscripciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inscripciones])],
  controllers: [InscripcionesController],
  providers: [InscripcionesService],
})

export class InscripcionesModule {}