import { Between, Connection, LessThan, Repository } from "typeorm";
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
            if(queryParameters.unidade) {
                return await this.repository.find({unidade: queryParameters.unidade});
            }
            else if(queryParameters.vencida === 'true') {
                const today = new Date(Date.now());

                return await this.repository.find({
                    vencimento_fatura: LessThan(today.toISOString()),
                    status_pagamento: false
                });
            }
            return await this.repository.find();
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
        const have_status_pagamento = entity.status_pagamento !== undefined;

        if (entity.descricao && entity.tipo_despesa && entity.valor && entity.vencimento_fatura && entity.unidade && have_status_pagamento) {

            despesas = new DespesaUnidade();

            despesas.descricao = entity.descricao;
            despesas.tipo_despesa = entity.tipo_despesa;
            despesas.valor = entity.valor;
            despesas.vencimento_fatura = entity.vencimento_fatura;
            despesas.status_pagamento = entity.status_pagamento;
            despesas.unidade = entity.unidade;
    
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
            if (values.vencimento_fatura) despesas.vencimento_fatura = values.vencimento_fatura;

            await this.repository.save(despesas);
        }

        return despesas;
    }


}