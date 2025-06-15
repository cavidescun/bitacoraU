import { DatosPaciente } from '../entity/datos-paciente.entity';

export interface DatosPacienteRepository {
  findById(idpaciente: number): Promise<DatosPaciente | null>;
  create(datosPaciente: DatosPaciente): Promise<DatosPaciente>;
  update(idpaciente: number, datosPaciente: Partial<DatosPaciente>): Promise<DatosPaciente>;
  delete(idpaciente: number): Promise<boolean>;
  findAll(): Promise<DatosPaciente[]>;
  findBySexo(sexo: number): Promise<DatosPaciente[]>;
}