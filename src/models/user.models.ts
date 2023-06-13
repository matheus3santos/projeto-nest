import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}