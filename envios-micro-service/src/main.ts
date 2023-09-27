import { NestFactory } from '@nestjs/core';
import { EnvioModule } from './envio/envio.module';

async function bootstrap() {
  const app = await NestFactory.create(EnvioModule);
  await app.listen(3000);
}
bootstrap();
