import { Cups } from '../entity/cups.entity';

export interface CupsRepository {
  findById(idcups: number): Promise<Cups | null>;
  create(cups: Cups): Promise<Cups>;
  update(idcups: number, cups: Partial<Cups>): Promise<Cups>;
  delete(idcups: number): Promise<boolean>;
  findAll(): Promise<Cups[]>;
}