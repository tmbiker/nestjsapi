import { Module } from '@nestjs/common';
import { config } from 'dotenv';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscriptos } from '../inscriptos/inscriptos.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from "@nestjs/config";

config();

const configService = new ConfigService();

@Module({
  imports: [
    TypeOrmModule.forFeature([Inscriptos]),
    JwtModule.register({
      secret: configService.getOrThrow('JWT_KEY'),
      signOptions:{
        algorithm: 'HS256',
        expiresIn: '45d'
      }
    }),
    PassportModule.register({
      defaultStrategy: 'jwt'
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
