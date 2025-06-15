import { Bitacora } from '../entity/bitacora.entity';

export interface BitacoraRepository {
  findById(idbitacora: number): Promise<Bitacora | null>;
  create(bitacora: Bitacora): Promise<Bitacora>;
  update(idbitacora: number, bitacora: Partial<Bitacora>): Promise<Bitacora>;
  delete(idbitacora: number): Promise<boolean>;
  findAll(): Promise<Bitacora[]>;
  findByDocente(idDocente: number): Promise<Bitacora[]>;
  findByFecha(fechaInicio: Date, fechaFin: Date): Promise<Bitacora[]>;
  findByPaciente(idPaciente: number): Promise<Bitacora[]>;
}