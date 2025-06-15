import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Bitacora } from "src/domain/bitacora/entity/bitacora.entity";

@Entity('tipo_participacion')
export class TipoParticipacion {
  @PrimaryGeneratedColumn()
  idtipo_participacion: number;

  @Column({ type: "varchar", length: 100 })
  tipo_part: string;

  @OneToMany(() => Bitacora, bitacora => bitacora.tipoParticipacion)
  bitacoras: Bitacora[];
}