import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('cups')
export class Cups{
  @PrimaryGeneratedColumn()
  idcups: number;

  @Column({ type: "varchar", length:200})
  procedimiento: string;
}