import ProjectRepository from "@src/adapters/database/repositories/ProjectRepository";
import IResponse from "@src/application/Responses/IResponse";
import SuccessResponse from "@src/application/Responses/SuccessResponse";
import ProjectOutput from "@src/ports/output/projects/ProjectOutput";
import Project from "../domain/Project";

export default class ProjectService {
    private repo : ProjectRepository

    constructor(repo : ProjectRepository) { this.repo = repo }

    async list() : Promise<IResponse> {
        const projects = await this.repo.list()

        const mapped = projects.map((project) => new ProjectOutput(project))

        return new SuccessResponse({
            data : mapped
        })
    }

    async getById(id : string) : Promise<IResponse> {
        const project = await this.repo.findById(id)

        const mapped = new ProjectOutput(project)

        return new SuccessResponse({
            data : mapped
        })
    }

    async create(input : createProjectInput) : Promise<IResponse> {
        const project = this.repo.create(new Project(input))

        return new SuccessResponse({
            data : new ProjectOutput(project)
        })
    }
}
