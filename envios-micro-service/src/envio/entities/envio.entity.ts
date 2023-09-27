import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

export enum EstadoEnum {
  RECIBIDO = 'RECIBIDO',
  EN_BODEGA = 'EN_BODEGA',
  DESPACHADO = 'DESPACHADO',
  ENTREGADO = 'ENTREGADO'
}

@Entity()
export class Envio {
  @PrimaryGeneratedColumn()
  id_envio: number;

  @Column({ type: 'int4', length: 100 })
  destinatario: string

  @Column({ type: 'int4', length: 100 })
  remitente: string

  @Column({ type: 'varchar', length: 140 })
  contenido: string

  @Column({ type: 'date' })
  fecha_envio: Date

  @Column({ type: 'enum', enum: EstadoEnum, default: EstadoEnum.RECIBIDO })
  estado: EstadoEnum
}
