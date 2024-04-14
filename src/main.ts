import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Req, Res, Next } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import morgan from 'morgan'

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

//  app.enableCors({
//        "origin": "*",
//        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//        "preflightContinue": false,
//        "optionsSuccessStatus": 204
//  });
  app.use(morgan('dev'))
  app.setGlobalPrefix('nestjsapi');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  const port = configService.getOrThrow('PORT');
  await app.listen(port);
}

bootstrap();