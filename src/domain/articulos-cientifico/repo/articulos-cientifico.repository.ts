import { ArticulosCientifico } from '../entity/articulos-cientifico.entity';

export interface ArticulosCientificoRepository {
  findById(idarticulos_cientifico: number): Promise<ArticulosCientifico | null>;
  findByUsuarioId(usuarioId: string): Promise<ArticulosCientifico[]>;
  create(articulo: ArticulosCientifico): Promise<ArticulosCientifico>;
  update(idarticulos_cientifico: number, articulo: Partial<ArticulosCientifico>): Promise<ArticulosCientifico>;
  delete(idarticulos_cientifico: number): Promise<boolean>;
  findAll(): Promise<ArticulosCientifico[]>;
}