import { Usuario } from '../entity/usuario.entity';

export interface UsuarioRepository {
  findById(identificacion: string): Promise<Usuario | null>;
  findByEmail(correo: string): Promise<Usuario | null>;
  create(usuario: Usuario): Promise<Usuario>;
  update(identificacion: string, usuario: Partial<Usuario>): Promise<Usuario>;
  delete(identificacion: string): Promise<boolean>;
  findAll(): Promise<Usuario[]>;
  findByTipoUsuario(tipoUsuario: number): Promise<Usuario[]>;
}