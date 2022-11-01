import Dev from "@src/core/domain/Dev";
import PaginateListInput from "@src/ports/input/PaginateListInput";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import DevEntity from "../entities/DevEntity";
import PostEntity from "../entities/PostEntity";
import AbstractRepository from "./AbstractRepository";

export default class DevRepository extends AbstractRepository<DevEntity> {
    override db : Repository<DevEntity>

    constructor() { 
        super(DevEntity); 
        this.db = AppDataSource.getRepository<DevEntity>(DevEntity)
    }


    async listByFilters(filters : PaginateListInput) : Promise<DevEntity[]> {
        return await this.db.createQueryBuilder('devs')
            .orderBy('RANDOM()')
            .limit(filters.limit)
            .offset(filters.offset)
            .getMany()
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
