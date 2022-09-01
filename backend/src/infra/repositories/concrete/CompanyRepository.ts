import { Repository } from "typeorm";
import CompanyEntity from "../../../core/entities/CompanyEntity";
import DevEntity from "../../../core/entities/DevEntity";
import { AppDataSource } from "../../../data-source";
import AbstractRepository from "../abstract/AbstractRepository";
import ICompanyRepository from "../abstract/ICompanyRepository";

export default class CompanyRepository extends AbstractRepository<CompanyEntity> implements ICompanyRepository {
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
