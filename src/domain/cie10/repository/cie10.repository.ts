import { Cie10 } from '../entity/cie10.entity';

export interface Cie10Repository {
  findById(idcie10: number): Promise<Cie10 | null>;
  create(cie10: Cie10): Promise<Cie10>;
  update(idcie10: number, cie10: Partial<Cie10>): Promise<Cie10>;
  delete(idcie10: number): Promise<boolean>;
  findAll(): Promise<Cie10[]>;
}