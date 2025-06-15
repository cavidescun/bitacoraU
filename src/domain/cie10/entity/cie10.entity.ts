import { Bitacora } from 'src/domain/bitacora/entity/bitacora.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('cie10')
export class Cie10 {
  @PrimaryGeneratedColumn()
  idcie10: number;

  @Column({ type: 'varchar', length: 200 })
  procedimiento: string;

  @OneToMany(() => Bitacora, (bitacora) => bitacora.CIE10_idCIE10)
  bitacoras: Bitacora[];
}
