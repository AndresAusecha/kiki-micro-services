import { Injectable } from '@nestjs/common';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Envio } from './entities/envio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnvioService {
  constructor(
    @InjectRepository(Envio) private readonly envioRepository: Repository<Envio>,
  ) {}

  create(createEnvioDto: CreateEnvioDto) {
    const envio = new Envio()
    envio.destinatario = createEnvioDto.destinatario
    envio.remitente  = createEnvioDto.remitente
    envio.contenido = createEnvioDto.contenido
    envio.estado = createEnvioDto.estado
    envio.fecha_envio = new Date(createEnvioDto.fecha_envio)
    
    return this.envioRepository.save(envio);
  }

  findAll() {
    return this.envioRepository.find();
  }
}
