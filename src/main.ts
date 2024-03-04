import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.getOrThrow('PORT');

  //  const { killPortProcess } = require('kill-port-process');

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

//  (async () => {
//    try {
//      await killPortProcess(port, 'SIGTERM');
//    } catch(err){
//      console.error('There was an error reading the file!', err);
//    }
//  })
  
//  await app.listen(port);
  await app.listen(port);

}

bootstrap();