import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Precios } from './precios.entity';
import { PreciosController } from './precios.controller';
import { PreciosService } from './precios.service';

@Module({
  imports: [TypeOrmModule.forFeature([Precios])],
  controllers: [PreciosController],
  providers: [PreciosService],
})

export class PreciosModule {}