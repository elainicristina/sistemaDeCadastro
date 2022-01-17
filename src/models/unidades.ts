import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('unidades')
export class Unidade {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    indetificacao: string

    @Column()
    proprietario: string

    @Column()
    condominio: string

    @Column()
    endereco: string
    
}