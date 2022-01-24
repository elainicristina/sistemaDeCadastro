import { Connection, Repository } from "typeorm";

export interface BaseService {

    connection: Connection;
    repository: Repository<object>;

    getAll(queryParameters: any): Promise<object[] | undefined>;
    getOne(id: number) : Promise<object | undefined>;
    create(enity: any) : Promise<object | undefined>;

}