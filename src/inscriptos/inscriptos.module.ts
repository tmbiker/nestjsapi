import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscriptos } from './inscriptos.entity';
import { InscriptosService } from './inscriptos.service';
import { InscriptosController } from './inscriptos.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Inscriptos])],
  providers: [InscriptosService],
  controllers: [InscriptosController]
})

export class InscriptosModule {}
