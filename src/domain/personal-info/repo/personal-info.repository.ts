import { PersonalInfo } from '../entity/personal-info.entity';

export interface PersonalInfoRepository {
  findById(idpersonal_info: number): Promise<PersonalInfo | null>;
  findByUsuarioId(usuarioId: string): Promise<PersonalInfo | null>;
  create(personalInfo: PersonalInfo): Promise<PersonalInfo>;
  update(idpersonal_info: number, personalInfo: Partial<PersonalInfo>): Promise<PersonalInfo>;
  delete(idpersonal_info: number): Promise<boolean>;
  findAll(): Promise<PersonalInfo[]>;
}