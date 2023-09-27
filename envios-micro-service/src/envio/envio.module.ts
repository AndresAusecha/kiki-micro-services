import { Module } from '@nestjs/common';
import { EnvioService } from './envio.service';
import { EnvioController } from './envio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'postgres_password',
    username: 'postgres',
    entities: [],
    database: 'postgres',
    synchronize: true,
    logging: true,
  })],
  controllers: [EnvioController],
  providers: [EnvioService],
})
export class EnvioModule {}
