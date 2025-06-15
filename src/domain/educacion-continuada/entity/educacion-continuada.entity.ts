import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "../../usuario/entity/usuario.entity";

@Entity('educacion_continuada')
export class EducacionContinuada {
  @PrimaryGeneratedColumn()
  idEstudio: number;

  @Column({ type: "varchar", length: 45 })
  tipo_estudio: string;

  @Column({ type: "varchar", length: 45 })
  nombre_estudio: string;

  @Column({ type: "date" })
  fecha_inicio: Date;

  @Column({ type: "date" })
  fecha_fin: Date;

  @Column({ type: "varchar", length: 100 })
  universidad: string;

  @Column({ type: "varchar", length: 100 })
  ciudad: string;

  @Column({ type: "varchar", length: 100 })
  Pais: string;

  @Column({ type: "varchar", length: 45 })
  usuarios_identificacion: string;

  @ManyToOne(() => Usuario, usuario => usuario.educaciones)
  @JoinColumn({ name: "usuarios_identificacion" })
  usuario: Usuario;
}