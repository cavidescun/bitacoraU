import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { DatosPaciente } from "src/domain/datos-paciente/entity/datos-paciente.entity";

@Entity('sexo')
export class Sexo {
  @PrimaryGeneratedColumn()
  idsexo: number;

  @Column({ type: "varchar", length: 45 })
  sexo_type: string;

  @OneToMany(() => DatosPaciente, datosPaciente => datosPaciente.sexo)
  datosPacientes: DatosPaciente[];
}