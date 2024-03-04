import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Placas } from './placas.entity';
import { PlacasController } from './placas.controller';
import { PlacasService } from './placas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Placas])],
  controllers: [PlacasController],
  providers: [PlacasService]
})
export class PlacasModule {}