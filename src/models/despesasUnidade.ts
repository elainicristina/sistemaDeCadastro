import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Unidade } from "./unidades";

@Entity('despesas')
export class DespesaUnidade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @Column()
    tipo_despesa: string;

    @Column()
    valor: number;

    @Column()
    vencimento_fatura: Date;

    @Column()
    status_pagamento: boolean;

    @ManyToOne(type => Unidade, unidade => unidade.despesas)
    unidade: Unidade;
}