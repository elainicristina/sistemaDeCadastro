import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('despesas')
export class DespesaUnidade {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descrição: string

    @Column()
    tipo_despesa: string

    @Column()
    valor: number

    @Column()
    vencimento: Date

    @Column()
    vencimento_fatura: Date

    @Column()
    status_pagamento: string
}