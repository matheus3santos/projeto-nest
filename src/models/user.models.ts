import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { QueixaModel } from './queixa.models'

@Entity()
export class UserModel {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date'})
  data: string;

  @Column()
  email: string;

  @Column()
  adress: string;

  @Column('int')
  telefone: number;

  @OneToMany(()=> QueixaModel, (queixa) => queixa.pessoa)
  queixas: QueixaModel[];





}


