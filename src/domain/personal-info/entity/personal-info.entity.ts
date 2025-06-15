import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "../../usuario/entity/usuario.entity";
import { ContactoEmergencia } from "../../contacto-emergencia/entity/contacto-emergencia.entity";
import { TipoSangre } from "src/domain/tipo-sangre/enity/tipo-sangre.entity";

@Entity('personal_info')
export class PersonalInfo {
  @PrimaryGeneratedColumn()
  idpersonal_info: number;

  @Column({ type: "date", nullable: true })
  fecha_nacimiento: Date;

  @Column({ type: "varchar", length: 45, nullable: true })
  ciudad_residencia: string;

  @Column({ type: "varchar", length: 45, nullable: true })
  ciudad_nacimiento: string;

  @Column({ type: "varchar", length: 45, nullable: true })
  pais_residencia: string;

  @Column({ type: "varchar", length: 45, nullable: true })
  eps: string;

  @Column({ type: "varchar", length: 45, nullable: true })
  arl: string;

  @Column({ type: "varchar", length: 45, nullable: true })
  celular: string;

  @Column({ type: "varchar", length: 45, nullable: true })
  direccion_residencia: string;

  @Column({ type: "text", nullable: true })
  url_imagen: string;

  @Column({ type: "varchar", length: 45 })
  usuario_identificacion: string;

  @Column()
  contacto_emergencia: number;

  @Column()
  tipo_sangre: number;

  @ManyToOne(() => Usuario, usuario => usuario.personalInfos)
  @JoinColumn({ name: "usuario_identificacion" })
  usuario: Usuario;

  @ManyToOne(() => ContactoEmergencia, contacto => contacto.personalInfos)
  @JoinColumn({ name: "contacto_emergencia" })
  contactoEmergencia: ContactoEmergencia;

  @ManyToOne(() => TipoSangre, tipoSangre => tipoSangre.personalInfos)
  @JoinColumn({ name: "tipo_sangre" })
  tipoSangre: TipoSangre;
}