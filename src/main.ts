import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //creamos prefijo para consumir las apis, asegurando que siempre se ponga este ej /api/...
  app.setGlobalPrefix('api');
  //para que el puerto no este hardcodeado y sea dinamico uso la prop port del AppModule
  await app.listen(AppModule.port);
}
bootstrap();