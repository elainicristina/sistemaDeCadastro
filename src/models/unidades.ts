import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DespesaUnidade } from "./despesasUnidade";

@Entity('unidades')
export class Unidade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    indetificacao: string;

    @Column()
    proprietario: string;

    @Column()
    condominio: string;

    @Column()
    endereco: string;

    @OneToMany(type => DespesaUnidade, despesa => despesa.unidade)
    despesas: DespesaUnidade[];
    
}