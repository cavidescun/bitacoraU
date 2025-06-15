import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { TipoIdentificacion } from "../../tipo-identificacion/entity/tipo-identificacion.entity";
import { Sexo } from "../../sexo/entity/sexo.entity";
import { Bitacora } from "src/domain/bitacora/entity/bitacora.entity";

@Entity('datos_paciente')
export class DatosPaciente {
  @PrimaryGeneratedColumn()
  idpaciente: number;

  @Column({ type: "int" })
  edad: number;

  @Column({ type: "varchar", length: 45 })
  identificacion_paciente: string;

  @Column()
  tipo_identificacion: number;

  @Column()
  sexo_idsexo: number;

  @ManyToOne(() => TipoIdentificacion, tipo => tipo.datosPacientes)
  @JoinColumn({ name: "tipo_identificacion" })
  tipoIdentificacion: TipoIdentificacion;

  @ManyToOne(() => Sexo, sexo => sexo.datosPacientes)
  @JoinColumn({ name: "sexo_idsexo" })
  sexo: Sexo;

  @OneToMany(() => Bitacora, bitacora => bitacora.datosPaciente)
  bitacoras: Bitacora[];
}