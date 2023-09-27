import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnvioService } from './envio.service';
import { CreateEnvioDto } from './dto/create-envio.dto';

@Controller('envios')
export class EnvioController {
  constructor(private readonly envioService: EnvioService) {}

  @Post()
  create(@Body() createEnvioDto: CreateEnvioDto) {
    return this.envioService.create(createEnvioDto);
  }

  @Get()
  findAll() {
    return this.envioService.findAll();
  }
}
