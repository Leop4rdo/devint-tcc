import PaginateListInput from "@src/ports/input/PaginateListInput";
import { ILike, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import ProjectEntity from "../entities/ProjectEntity";
import AbstractRepository from "./AbstractRepository";

export interface ProjectListOptions extends PaginateListInput {
    owner ?: string
}

export default class ProjectRepository extends AbstractRepository<ProjectEntity> {
    override db : Repository<ProjectEntity>

    constructor() { 
        super(ProjectEntity);
        this.db = AppDataSource.getRepository<ProjectEntity>(ProjectEntity)
    }

    async list(options ?: ProjectListOptions) { 
        return this.db.createQueryBuilder('p')
            .innerJoinAndSelect('p.members', 'devs')
            .where((options?.owner) ? "p.owner = :owner" : '', { owner: options?.owner })
            .limit(options?.limit)
            .offset(options?.offset)
            .getMany()
    }
}
