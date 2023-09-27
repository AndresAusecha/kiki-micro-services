import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { EstadoEnum } from '../entities/envio.entity';

export class CreateEnvioDto {
  @IsString()
  @IsNotEmpty()
  destinatario: string

  @IsInt()
  @IsNotEmpty()
  remitente: string

  @IsNotEmpty()
  @MaxLength(140)
  contenido: string

  @IsNotEmpty()
  fecha_envio: Date

  @IsEnum(EstadoEnum)
  estado: EstadoEnum
}
