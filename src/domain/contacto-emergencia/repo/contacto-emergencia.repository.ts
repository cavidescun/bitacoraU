import { ContactoEmergencia } from '../entity/contacto-emergencia.entity';

export interface ContactoEmergenciaRepository {
  findById(idcontacto_emergencia: number): Promise<ContactoEmergencia | null>;
  create(contacto: ContactoEmergencia): Promise<ContactoEmergencia>;
  update(idcontacto_emergencia: number, contacto: Partial<ContactoEmergencia>): Promise<ContactoEmergencia>;
  delete(idcontacto_emergencia: number): Promise<boolean>;
  findAll(): Promise<ContactoEmergencia[]>;
}
