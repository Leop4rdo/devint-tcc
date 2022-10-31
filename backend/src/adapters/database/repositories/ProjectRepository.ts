import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import ProjectEntity from "../entities/ProjectEntity";
import AbstractRepository from "./AbstractRepository";

export default class ProjectRepository extends AbstractRepository<ProjectEntity> {
    override db : Repository<ProjectEntity>

    constructor() { 
        super(ProjectEntity);
        this.db = AppDataSource.getRepository<ProjectEntity>(ProjectEntity)
    }
}
