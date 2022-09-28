import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import DevEntity from "../entities/DevEntity";
import AbstractRepository from "./AbstractRepository";

export default class DevRepository extends AbstractRepository<DevEntity> {
    override db : Repository<DevEntity>

    constructor() { 
        super(DevEntity); 
        this.db = AppDataSource.getRepository<DevEntity>(DevEntity)
    }

    async findByAuthId(_id : string) : Promise<DevEntity> {
        return await this.db.findOne({
            where : {
                auth : {
                    id : _id
                }
            }
        })
    }

    
}
