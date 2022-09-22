import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import CompanyEntity from "../entities/CompanyEntity";
import AbstractRepository from "./AbstractRepository";

export default class CompanyRepository extends AbstractRepository<CompanyEntity> {
    override db : Repository<CompanyEntity>

    constructor() { 
        super(CompanyEntity);
        this.db = AppDataSource.getRepository<CompanyEntity>(CompanyEntity)
    }

    async findByAuthId(_id : string) : Promise<CompanyEntity> {
        return await this.db.findOne({
            where : {
                auth : {
                    id: _id
                }
            }
        })
    }
}
