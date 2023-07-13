import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { QueixaModel } from './queixa.models'

@Entity()
export class UserModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  data: string;

  @Column()
  email: string;

  @Column()
  adress: string;

  @Column({ type: "int" })
  telefone: number;

  @OneToMany(()=> QueixaModel, (queixa) => queixa.pessoa)
  queixas: QueixaModel[];





}


