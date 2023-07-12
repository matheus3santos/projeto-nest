import { Entity,Column,PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { UserModel } from "./user.models";




@Entity()
export class QueixaModel {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    date:string;

    @Column()
    adress: string;

    @Column()
    reference: string;

    @Column()
    description: string;

    @ManyToOne(()=>UserModel, (pessoa) =>pessoa.queixas)
    pessoa : UserModel;
    
}