import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Cups } from "../../cups/entity/cups.entity";
import { Cie10 } from "../../cie10/entity/cie10.entity";
import { DatosPaciente } from "../../datos-paciente/entity/datos-paciente.entity";
import { TipoParticipacion } from "../../tipo-participacion/entity/tipo-participacion.entity";

@Entity('bitacora')
export class Bitacora {
  @PrimaryGeneratedColumn()
  idbitacora: number;

  @Column({ type: "text", nullable: true })
  comentarios: string;

  @Column({ type: "int" })
  cantidad_proced: number;

  @Column({ type: "date" })
  fecha_participacion: Date;

  @Column({ type: "varchar", length: 250 })
  centro_rotacion: string;

  @Column({ type: "int" })
  id_docente: number;

  @Column()
  CUPS_idCUPS: number;

  @Column()
  CIE10_idCIE10: number;

  @Column()
  datos_paciente_idpaciente: number;

  @Column()
  tipo_participacion: number;

  @ManyToOne(() => Cups, cups => cups.bitacoras)
  @JoinColumn({ name: "CUPS_idCUPS" })
  cups: Cups;

  @ManyToOne(() => Cie10, cie10 => cie10.bitacoras)
  @JoinColumn({ name: "CIE10_idCIE10" })
  cie10: Cie10;

  @ManyToOne(() => DatosPaciente, datosPaciente => datosPaciente.bitacoras)
  @JoinColumn({ name: "datos_paciente_idpaciente" })
  datosPaciente: DatosPaciente;

  @ManyToOne(() => TipoParticipacion, tipoParticipacion => tipoParticipacion.bitacoras)
  @JoinColumn({ name: "tipo_participacion" })
  tipoParticipacion: TipoParticipacion;
}