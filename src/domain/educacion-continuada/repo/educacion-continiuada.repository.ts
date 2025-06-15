import { EducacionContinuada } from '../entity/educacion-continuada.entity';

export interface EducacionContinuadaRepository {
  findById(idEstudio: number): Promise<EducacionContinuada | null>;
  findByUsuarioId(usuarioId: string): Promise<EducacionContinuada[]>;
  create(educacion: EducacionContinuada): Promise<EducacionContinuada>;
  update(idEstudio: number, educacion: Partial<EducacionContinuada>): Promise<EducacionContinuada>;
  delete(idEstudio: number): Promise<boolean>;
  findAll(): Promise<EducacionContinuada[]>;
}