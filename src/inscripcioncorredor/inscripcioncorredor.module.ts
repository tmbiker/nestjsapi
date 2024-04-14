import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corredores2024 } from './inscripcioncorredor.entity';
import { InscripcionCorredorService } from './inscripcioncorredor.service';
import { InscripcionCorredorController } from './inscripcioncorredor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Corredores2024])],
  controllers: [InscripcionCorredorController],
  providers: [InscripcionCorredorService],
})

export class InscripcionCorredorModule {}