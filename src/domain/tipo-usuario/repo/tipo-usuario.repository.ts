import { TipoUsuario } from '../entity/tipo-usuario.entity';

export interface TipoUsuarioRepository {
  findById(idtipo_usuario: number): Promise<TipoUsuario | null>;
  create(tipoUsuario: TipoUsuario): Promise<TipoUsuario>;
  update(idtipo_usuario: number, tipoUsuario: Partial<TipoUsuario>): Promise<TipoUsuario>;
  delete(idtipo_usuario: number): Promise<boolean>;
  findAll(): Promise<TipoUsuario[]>;
}