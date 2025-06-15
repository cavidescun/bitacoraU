import { Sexo } from '../entity/sexo.entity';

export interface SexoRepository {
  findById(idsexo: number): Promise<Sexo | null>;
  create(sexo: Sexo): Promise<Sexo>;
  update(idsexo: number, sexo: Partial<Sexo>): Promise<Sexo>;
  delete(idsexo: number): Promise<boolean>;
  findAll(): Promise<Sexo[]>;
}