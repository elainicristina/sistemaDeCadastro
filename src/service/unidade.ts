import { Between, Connection, EntityColumnNotFound, Repository } from "typeorm";
import { BaseService } from "./base";
import { Unidade } from "../models/unidades";


export class UnidadeService implements BaseService {

    connection: Connection;
    repository: Repository<Unidade>;

    constructor(connection: Connection) {
        this.connection = connection;
        this.repository = connection.getRepository(Unidade);
    }

    
    async getAll(): Promise<Unidade[] | undefined> {
       
        return await this.repository.find();
            
    }

    async getOne(id: number): Promise<Unidade | undefined> {
        return await this.repository.findOne(id);
    }


    async create(entity: any): Promise<Unidade | undefined> {
        let unidades;

        if (entity.indetificacao && entity.proprietario && entity.condominio  && entity.endereco) {

            unidades = new Unidade();

            unidades.indetificacao = entity.indetificacao;
            unidades.proprietario = entity.proprietario;
            unidades.condominio = entity.condominio;
            unidades.endereco = entity.endereco;

            await this.repository.save(unidades);
        }

        return unidades;
    }



}