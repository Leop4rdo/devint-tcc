import { Repository } from "typeorm";
import AuthEntity from "../../../core/entities/AuthEntity";
import DevEntity from "../../../core/entities/DevEntity";
import IDevProps from "../../../core/interfaces/IDev";
import { AppDataSource } from "../../../data-source";
import AbstractRepository from "../abstract/AbstractRepository";
import IDevRepository from "../abstract/IDevRepository";

export default class DevRepository extends AbstractRepository<DevEntity> implements IDevRepository{
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
