import { TipoSangre } from '../entity/tipo-sangre.entity';

export interface TipoSangreRepository {
  findById(idtipo_sangre: number): Promise<TipoSangre | null>;
  create(tipoSangre: TipoSangre): Promise<TipoSangre>;
  update(idtipo_sangre: number, tipoSangre: Partial<TipoSangre>): Promise<TipoSangre>;
  delete(idtipo_sangre: number): Promise<boolean>;
  findAll(): Promise<TipoSangre[]>;
}