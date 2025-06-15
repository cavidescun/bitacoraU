import { Cie10 } from '../entity/cie10.entity';

export interface Cie10Repository {
  findById(idcie10: string): Promise<Cie10 | null>;
  create(procedimiento: Cie10): Promise<Cie10>;
  update(idcie10: string, procedimiento: Partial<Cie10>): Promise<Cie10>;
  delete(idcie10: string): Promise<boolean>;
  findAll(): Promise<Cie10[]>;
}