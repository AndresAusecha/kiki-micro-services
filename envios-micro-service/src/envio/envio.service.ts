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
    return this.envioRepository.create(createEnvioDto);
  }

  findAll() {
    return this.envioRepository.find();
  }
}
