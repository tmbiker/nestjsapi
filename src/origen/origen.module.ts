import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Origen } from './origen.entity';
import { OrigenController } from './origen.controller';
import { OrigenService } from './origen.service';

@Module({
  imports: [TypeOrmModule.forFeature([Origen])],
  controllers: [OrigenController],
  providers: [OrigenService]
})
export class OrigenModule {}