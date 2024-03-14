import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carreras } from './carreras.entity';
import { CarrerasController } from './carreras.controller';
import { CarrerasService } from './carreras.service';

@Module({
  imports: [TypeOrmModule.forFeature([Carreras])],
  controllers: [CarrerasController],
  providers: [CarrerasService]
})
export class CarrerasModule {}