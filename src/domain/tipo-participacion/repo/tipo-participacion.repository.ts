import { TipoParticipacion } from '../entity/tipo-participacion.entity';

export interface TipoParticipacionRepository {
  findById(idtipo_participacion: number): Promise<TipoParticipacion | null>;
  create(tipoParticipacion: TipoParticipacion): Promise<TipoParticipacion>;
  update(idtipo_participacion: number, tipoParticipacion: Partial<TipoParticipacion>): Promise<TipoParticipacion>;
  delete(idtipo_participacion: number): Promise<boolean>;
  findAll(): Promise<TipoParticipacion[]>;
}