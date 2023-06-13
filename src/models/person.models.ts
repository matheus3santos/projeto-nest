import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class PersonModel {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column('int')
    age: number;

    @Column()
    email: string;
}