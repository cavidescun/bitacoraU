import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Bitacora } from 'src/domain/bitacora/entity/bitacora.entity';

@Entity('cups')
export class Cups {
  @PrimaryGeneratedColumn()
  idcups: number;

  @Column({ type: 'varchar', length: 200 })
  procedimiento: string;

  @OneToMany(() => Bitacora, (bitacora) => bitacora.CUPS_idCUPS)
  bitacoras: Bitacora[];
}
