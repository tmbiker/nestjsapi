import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from 'src/httpservice.config';
import { Module } from '@nestjs/common';
import { WappController } from './wapp.controller';
import { WappService } from './wapp.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    WappModule
  ],
  controllers: [WappController],
  providers: [WappService]
})
export class WappModule {}
