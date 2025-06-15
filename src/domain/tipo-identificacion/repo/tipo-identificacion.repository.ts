import { TipoIdentificacion } from '../entity/tipo-identificacion.entity';

export interface TipoIdentificacionRepository {
  findById(idtipo_identificacion: number): Promise<TipoIdentificacion | null>;
  create(tipoIdentificacion: TipoIdentificacion): Promise<TipoIdentificacion>;
  update(idtipo_identificacion: number, tipoIdentificacion: Partial<TipoIdentificacion>): Promise<TipoIdentificacion>;
  delete(idtipo_identificacion: number): Promise<boolean>;
  findAll(): Promise<TipoIdentificacion[]>;
}