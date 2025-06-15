import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "../../usuario/entity/usuario.entity";

@Entity('articulos_cientifico')
export class ArticulosCientifico {
  @PrimaryGeneratedColumn()
  idarticulos_cientifico: number;

  @Column({ type: "text" })
  titulo_publicacion: string;

  @Column({ type: "text" })
  Autores: string;

  @Column({ type: "varchar", length: 200 })
  revista: string;

  @Column({ type: "varchar", length: 100 })
  ciudad: string;

  @Column({ type: "varchar", length: 100 })
  ano_publicacion: string;

  @Column({ type: "varchar", length: 45 })
  usuarios_identificacion: string;

  @ManyToOne(() => Usuario, usuario => usuario.articulos)
  @JoinColumn({ name: "usuarios_identificacion" })
  usuario: Usuario;
}