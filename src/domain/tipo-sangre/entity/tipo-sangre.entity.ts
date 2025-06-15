import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { PersonalInfo } from "src/domain/personal-info/entity/personal-info.entity";

@Entity('tipo_sangre')
export class TipoSangre {
  @PrimaryGeneratedColumn()
  idtipo_sangre: number;

  @Column({ type: "varchar", length: 45 })
  tipo: string;

  @OneToMany(() => PersonalInfo, personalInfo => personalInfo.tipoSangre)
  personalInfos: PersonalInfo[];
}