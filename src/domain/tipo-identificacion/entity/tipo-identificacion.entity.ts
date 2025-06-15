import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Usuario } from "src/domain/usuario/entity/usuario.entity";
import { DatosPaciente } from "src/domain/datos-paciente/entity/datos-paciente.entity";

@Entity('tipo_identificacion')
export class TipoIdentificacion {
  @PrimaryGeneratedColumn()
  idtipo_identificacion: number;

  @Column({ type: "varchar", length: 45 })
  tipo_documento: string;

  @OneToMany(() => Usuario, usuario => usuario.tipoIdentificacion)
  usuarios: Usuario[];

  @OneToMany(() => DatosPaciente, datosPaciente => datosPaciente.tipoIdentificacion)
  datosPacientes: DatosPaciente[];
}