import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Usuario } from "src/domain/usuario/entity/usuario.entity";

@Entity('tipo_usuario')
export class TipoUsuario {
  @PrimaryGeneratedColumn()
  idtipo_usuario: number;

  @Column({ type: "varchar", length: 45 })
  type: string;

  @OneToMany(() => Usuario, usuario => usuario.tipoUsuario)
  usuarios: Usuario[];
}