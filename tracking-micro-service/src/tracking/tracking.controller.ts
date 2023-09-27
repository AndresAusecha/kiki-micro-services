import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrackingService } from './tracking.service';
import { CreateTrackingDto } from './dto/create-tracking.dto';

@Controller('envios')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post("/:envio-id/tracking")
  create(@Param('envio-id') envioId: string, @Body() createTrackingDto: CreateTrackingDto) {
    return this.trackingService.create(envioId, createTrackingDto);
  }

  @Get("/:envio-id/tracking")
  findAll(@Param('envio-id') envioId: string) {
    return this.trackingService.findByEnvioId(envioId);
  }
}
