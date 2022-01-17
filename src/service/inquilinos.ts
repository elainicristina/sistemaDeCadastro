import { Connection, EntityColumnNotFound, Repository } from "typeorm";
import { BaseService } from "./base";
import { Inquilino } from "../models/inquilinos";


export class DespesaService implements BaseService {

    connection: Connection;
    repository: Repository<Inquilino>;

    constructor(connection: Connection) {
        this.connection = connection;
        this.repository = connection.getRepository(Inquilino);
    }

    
    async getAll(): Promise<Inquilino[] | undefined> {
        return await this.repository.find();
            
    }

    async getOne(id: number): Promise<Inquilino | undefined> {
        return await this.repository.findOne(id);
    }


    async create(entity: any): Promise<Inquilino | undefined> {
        let inquilinos;

        if (entity.nome && entity.idade && entity.sexo  && entity.telefone
            && entity.email) {

            inquilinos = new Inquilino();

            inquilinos.nome = entity.nome;
            inquilinos.idade = entity.idade;
            inquilinos.sexo = entity.sexo;
            inquilinos.telefone = entity.telefone;
            inquilinos.email = entity.email;
    
            await this.repository.save(inquilinos);
        }

        return inquilinos;
    }


}