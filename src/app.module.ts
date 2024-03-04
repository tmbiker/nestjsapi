import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { CategoriasModule } from './categorias/categorias.module';
import { InscriptosModule } from './inscriptos/inscriptos.module';
import { EquiposModule } from './equipos/equipos.module';
import { ResultadosModule } from './resultados/resultados.module';
import { AuthModule } from './auth/auth.module';
import { OrigenModule } from './origen/origen.module';
import { PlacasModule } from './placas/placas.module';
import { WappModule } from './wapp/wapp.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), DatabaseModule, InscripcionesModule, CategoriasModule, InscriptosModule, EquiposModule, ResultadosModule, AuthModule, OrigenModule, PlacasModule, WappModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
