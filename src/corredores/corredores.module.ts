import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corredores } from './corredores.entity';
import { Equipos } from '../equipos/equipos.entity';
import { CorredoresService } from './corredores.service';
import { CorredoresController } from './corredores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Corredores]),TypeOrmModule.forFeature([Equipos])],
  controllers: [CorredoresController],
  providers: [CorredoresService],
})

export class CorredoresModule {}