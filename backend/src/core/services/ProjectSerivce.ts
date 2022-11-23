import ProjectEntity from "@src/adapters/database/entities/ProjectEntity";
import ProjectRepository, { ProjectListOptions } from "@src/adapters/database/repositories/ProjectRepository";
import BadRequestResponse from "@src/application/Responses/BadRequestResponse";
import IResponse from "@src/application/Responses/IResponse";
import SuccessResponse from "@src/application/Responses/SuccessResponse";
import errors from "@src/helpers/errors";
import ProjectCreateInput from "@src/ports/input/projects/ProjectCreateInput";
import ProjectOutput from "@src/ports/output/projects/ProjectOutput";
import IDevProps from "../domain/interfaces/IDev";
import IProjectProps from "../domain/interfaces/IProject";
import Project from "../domain/Project";

export default class ProjectService {
    private repo : ProjectRepository

    constructor(repo : ProjectRepository) { this.repo = repo }

    async list(options ?: ProjectListOptions) : Promise<IResponse> {
        console.log(options)
        const projects = await this.repo.list(options)

        const mapped = projects.map((project) => new ProjectOutput(project as unknown as IProjectProps))

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

    async create(input : ProjectCreateInput, ownerId : string) : Promise<IResponse> {
        const project = await this.repo.create(new Project({
                ...input,
                members: (input.members.find((m) => m.id == ownerId)) ? 
                    input.members 
                    : [...input.members, { id: ownerId }],
                owner: ownerId
            } as unknown as IProjectProps) as unknown as ProjectEntity)

        return new SuccessResponse({
            data : new ProjectOutput(project)
        })
    }

    async update(input : ProjectCreateInput, id : string) : Promise<IResponse> {
        const project : Project = await this.repo.findById(id)

        if (!project)
            return new BadRequestResponse({
                status : 404,
                message : 'Project not found'
            })
        
        Object.assign(project, input)

        await this.repo.update(project as ProjectEntity)

        return new SuccessResponse({
            data : project
        })
    }

    async toggleHeart(projectId: string, userId: string) {
        const project  = await this.repo.findById(projectId, ['members'])

        if (!project)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })
        
        if (project.hearts.includes(userId))
            project.hearts.filter((id : string) => id != userId)
        else 
            project.hearts.push(userId)
        
        await this.repo.update(project)

        return new SuccessResponse({
            status: 200,
            data: new ProjectOutput(project, userId)
        })
    }
}
