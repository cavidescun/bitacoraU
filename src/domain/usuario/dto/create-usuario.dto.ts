export class CreateUsuarioDto {
  identificacion: string;
  nombres: string;
  apellidos: string;
  correo: string;
  contraseña: string;
  tipo_identificacion: number;
  tipo_usuario: number;
  consent: boolean;
}