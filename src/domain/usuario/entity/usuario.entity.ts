import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { TipoIdentificacion } from "../../tipo-identificacion/entity/tipo-identificacion.entity";
import { TipoUsuario } from "../../tipo-usuario/entity/tipo-usuario.entity";
import { PersonalInfo } from "src/domain/personal-info/entity/personal-info.entity";
import { EducacionContinuada } from "src/domain/educacion-continuada/entity/educacion-continuada.entity";
import { ArticulosCientifico } from "src/domain/articulos-cientifico/entity/articulos-cientifico.entity";

@Entity('usuario')
export class Usuario {
  @PrimaryColumn({ type: "varchar", length: 45 })
  identificacion: string;

  @Column({ type: "varchar", length: 45 })
  nombres: string;

  @Column({ type: "varchar", length: 45 })
  apellidos: string;

  @Column({ type: "varchar", length: 45, unique: true })
  correo: string;

  @Column({ type: "varchar", length: 255 })
  contraseña: string;

  @Column()
  tipo_identificacion: number;

  @Column()
  tipo_usuario: number;

  @Column({ type: "boolean" })
  consent: boolean;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp" })
  update_at: Date;

  @ManyToOne(() => TipoIdentificacion, tipoIdentificacion => tipoIdentificacion.usuarios)
  @JoinColumn({ name: "tipo_identificacion" })
  tipoIdentificacion: TipoIdentificacion;

  @ManyToOne(() => TipoUsuario, tipoUsuario => tipoUsuario.usuarios)
  @JoinColumn({ name: "tipo_usuario" })
  tipoUsuario: TipoUsuario;

  @OneToMany(() => PersonalInfo, personalInfo => personalInfo.usuario)
  personalInfos: PersonalInfo[];

  @OneToMany(() => EducacionContinuada, educacion => educacion.usuario)
  educaciones: EducacionContinuada[];

  @OneToMany(() => ArticulosCientifico, articulo => articulo.usuario)
  articulos: ArticulosCientifico[];
}