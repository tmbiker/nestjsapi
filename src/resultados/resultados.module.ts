import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultados } from './resultados.entity';
import { ResultadosController } from './resultados.controller';
import { ResultadosService } from './resultados.service';

@Module({
  imports: [TypeOrmModule.forFeature([Resultados])],
  controllers: [ResultadosController],
  providers: [ResultadosService]
})

export class ResultadosModule {}