export class CreatePersonalInfoDto {
  fecha_nacimiento?: Date;
  ciudad_residencia?: string;
  ciudad_nacimiento?: string;
  pais_residencia?: string;
  eps?: string;
  arl?: string;
  celular?: string;
  direccion_residencia?: string;
  url_imagen?: string;
  usuario_identificacion: string;
  contacto_emergencia: number;
  tipo_sangre: number;
}