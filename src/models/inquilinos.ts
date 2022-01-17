import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('inquilinos')
export class Inquilino {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    idade: number

    @Column()
    sexo: string

    @Column()
    telefone: string

    @Column()
    email: string

    
}