import { Between, Connection, EntityColumnNotFound, Repository } from "typeorm";
import { BaseService } from "./base";
import { DespesaUnidade } from "../models/despesasUnidade";


interface DespesaInterface {
    update(id: number, values: any): Promise<object | undefined>; 
}

export class DespesaService implements BaseService, DespesaInterface{

    connection: Connection;
    repository: Repository<DespesaUnidade>;

    constructor(connection: Connection) {
        this.connection = connection;
        this.repository = connection.getRepository(DespesaUnidade);
    }

    
    async getAll(queryParameters: any): Promise<DespesaUnidade[] | undefined> {
       
        try {

            if(queryParameters.dataVencimento && queryParameters.dataPagamento){
                return await this.repository.find({
                    vencimento_fatura: Between(queryParameters.dataVencimento, queryParameters.dataPagamento)
                });
            }
    
            return await this.repository.find(queryParameters);
            
           }
           catch {
                console.log("Error in search")
           }
    }

    async getOne(id: number): Promise<DespesaUnidade | undefined> {
        return await this.repository.findOne(id);
    }


    async create(entity: any): Promise<DespesaUnidade | undefined> {
        let despesas;

        if (entity.descricao && entity.tipo_despesa && entity.valor  && entity.vencimento
            && entity.vencimento_fatura  && entity.status_pagamento) {

            despesas = new DespesaUnidade();

            despesas.descricao = entity.descricao;
            despesas.tipo_despesa = entity.tipo_despesa;
            despesas.valor = entity.valor;
            despesas.vencimento = entity.vencimento;
            despesas.vencimento_fatura = entity.vencimento_fatura;
    
            await this.repository.save(despesas);
        }

        return despesas;
    }


    async update(id: number, values: any): Promise<DespesaUnidade | undefined> {
        const despesas = await this.repository.findOne(id);

        if ((despesas !== undefined) && (values !== {})) {
            if (values.descricao) despesas.descricao = values.descricao;
            if (values.tipo_despesa) despesas.tipo_despesa = values.tipo_despesa;
            if (values.valor) despesas.valor = values.valor;
            if (values.vencimento) despesas.vencimento = values.vencimento;
            if (values.vencimento_fatura) despesas.vencimento_fatura = values.vencimento_fatura;

            await this.repository.save(despesas);
        }

        return despesas;
    }


}