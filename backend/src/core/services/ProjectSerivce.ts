import ProjectEntity from "@src/adapters/database/entities/ProjectEntity";
import ProjectRepository, { ProjectListOptions } from "@src/adapters/database/repositories/ProjectRepository";
import BadRequestResponse from "@src/application/Responses/BadRequestResponse";
import IResponse from "@src/application/Responses/IResponse";
import SuccessResponse from "@src/application/Responses/SuccessResponse";
import ProjectCreateInput from "@src/ports/input/projects/ProjectCreateInput";
import ProjectOutput from "@src/ports/output/projects/ProjectOutput";
import IDevProps from "../domain/interfaces/IDev";
import IProjectProps from "../domain/interfaces/IProject";
import Project from "../domain/Project";

export default class ProjectService {
    private repo : ProjectRepository

    constructor(repo : ProjectRepository) { this.repo = repo }

    async list(options ?: ProjectListOptions) : Promise<IResponse> {
        try {
            const projects = await this.repo.list(options)
            console.log('projects: ', projects)

            const mapped = projects.map((project) => new ProjectOutput(project as unknown as IProjectProps))

            return new SuccessResponse({
                data : mapped
            })
        } catch(err) { console.log(err)}

    }

    async getById(id : string) : Promise<IResponse> {
        const project = await this.repo.findById(id)

        const mapped = new ProjectOutput(project)

        return new SuccessResponse({
            data : mapped
        })
    }

    async create(input : ProjectCreateInput, ownerId : string) : Promise<IResponse> {
        const project = await this.repo.create(new Project({
                ...input,
                members: [...input.members, { id: ownerId }],
                owner: ownerId
            } as unknown as IProjectProps) as unknown as ProjectEntity)

        return new SuccessResponse({
            data : new ProjectOutput(project)
        })
    }

    async update(input : ProjectCreateInput, id : string) : Promise<IResponse> {
        const project = await this.repo.findById(id)

        if (!project)
            return new BadRequestResponse({
                status : 404,
                message : 'Project not found'
            })
        
        Object.assign(project, input)

        await this.repo.update(project)

        return new SuccessResponse({
            data : project
        })
    }
}
