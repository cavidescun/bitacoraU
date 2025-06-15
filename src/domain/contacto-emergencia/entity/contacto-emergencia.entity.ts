import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { PersonalInfo } from "src/domain/personal-info/entity/personal-info.entity";

@Entity('contacto_emergencia')
export class ContactoEmergencia {
  @PrimaryGeneratedColumn()
  idcontacto_emergencia: number;

  @Column({ type: "varchar", length: 45, nullable: true })
  nombres: string;

  @Column({ type: "varchar", length: 45, nullable: true })
  apellidos: string;

  @Column({ type: "varchar", length: 45, nullable: true })
  celular: string;

  @Column({ type: "varchar", length: 45, nullable: true })
  ciudad_residencia: string;

  @Column({ type: "varchar", length: 45, nullable: true })
  pais_residencia: string;

  @OneToMany(() => PersonalInfo, personalInfo => personalInfo.contactoEmergencia)
  personalInfos: PersonalInfo[];
}