import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRootAsync({
        useFactory: (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.getOrThrow('MYSQL_HOST'),
            port: parseInt(configService.getOrThrow('MYSQL_PORT'), 10) || 3306,
            username: configService.getOrThrow('MYSQL_USER'),
            password: configService.getOrThrow('MYSQL_PASSWORD'),
            database: configService.getOrThrow('MYSQL_DATABASE'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: false,
        }),
        inject: [ConfigService],
    }),
    ],
})

export class DatabaseModule {}