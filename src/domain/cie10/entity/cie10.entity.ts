import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('cie10')
export class Cie10{
  @PrimaryGeneratedColumn()
  idcie10: number;

  @Column({ type: "varchar", length:200})
  procedimiento: string;
}