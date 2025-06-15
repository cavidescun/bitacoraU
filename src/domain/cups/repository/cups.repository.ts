import { Cups } from '../entity/cups.entity';

export interface CupsRepository {
  findById(idcups: string): Promise<Cups | null>;
  create(procedimiento: Cups): Promise<Cups>;
  update(idcups: string, procedimiento: Partial<Cups>): Promise<Cups>;
  delete(idcups: string): Promise<boolean>;
  findAll(): Promise<Cups[]>;
}