import { ILike, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import ProjectEntity from "../entities/ProjectEntity";
import AbstractRepository from "./AbstractRepository";

export interface ProjectListOptions {
    owner ?: string
}

export default class ProjectRepository extends AbstractRepository<ProjectEntity> {
    override db : Repository<ProjectEntity>

    constructor() { 
        super(ProjectEntity);
        this.db = AppDataSource.getRepository<ProjectEntity>(ProjectEntity)
    }

    async list(options ?: ProjectListOptions) { 
        console.log(options)
        return await this.db.find({
            relations : ['members'],
            where : {
                owner : options?.owner || ILike('%%')
            }
        })
    }
}
