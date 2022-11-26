import Dev from "@src/core/domain/Dev";
import PaginateListInput from "@src/ports/input/PaginateListInput";
import UserQueryFilter from "@src/ports/input/user/UserQueryFilter";
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


    async listByFilters(filters : UserQueryFilter) : Promise<DevEntity[]> {
        const query = this.db.createQueryBuilder('d')

        if (filters.sort && filters.sort.toUpperCase() === 'RANDOM')
            query.orderBy('RANDOM()')
            
        if (filters.search)
            query.where('d.name ILIKE :search or d.github_username ILIKE :search', { search : `${filters.search}%`})

        if (filters.ignore)
            query.andWhere('d.id NOT IN (:...ignore)', { ignore : filters.ignore })

        return query
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
