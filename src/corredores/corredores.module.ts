import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corredores } from './corredores.entity';
import { CorredoresService } from './corredores.service';
import { CorredoresController } from './corredores.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Corredores])],
  controllers: [CorredoresController],
  providers: [CorredoresService]
})

export class CorredoresModule {}