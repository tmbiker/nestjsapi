import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipos } from './equipos.entity';
import { EquiposService } from './equipos.service';
import { EquiposController } from './equipos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Equipos])],
  controllers: [EquiposController],
  providers: [EquiposService]
})

export class EquiposModule {}