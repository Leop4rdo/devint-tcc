import IRepository from "@repositories/IRepository"
import BadRequestResponse from "@src/application/Responses/BadRequestResponse"
import IResponse from "@src/application/Responses/IResponse"
import ServerErrorResponse from "@src/application/Responses/ServerErrorResponse"
import SuccessResponse from "@src/application/Responses/SuccessResponse"
import errors from "@src/helpers/errors"


export abstract class  AbstractService<T> {
    protected repo: IRepository<T>

    constructor(repo: IRepository<T>) {
        this.repo = repo
    }

    async list() : Promise<IResponse> { 
        try {
            return new SuccessResponse({
                data : await this.repo.list()
            })
        } catch (e) {
            return new ServerErrorResponse({ message : e.message })
        }
    }

    async findById(id: string) : Promise<IResponse> {
        try {
            return new SuccessResponse({
                data: await this.repo.findById(id)
            })
        } catch (e) {
            return new ServerErrorResponse({ message : e.message })
        }
    }

    async create(entity: T) : Promise<IResponse> {
        try {
            

            return new SuccessResponse({
                status: 201,
                data: {...await this.repo.create(entity), userData : undefined}
            })
        } catch (e) {
            return new ServerErrorResponse({ message : e.message })
        }
    }

    async update(entity: T, id : string) : Promise<IResponse> {
        try {

            const entityExists = await this.repo.findById(id)

            if (!entityExists) 
                return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

            Object.assign(entityExists, entity)

            await this.repo.update(entityExists)

            return new SuccessResponse({
                status: 204,
                data: entityExists
            })

        } catch (e) {
            return new ServerErrorResponse({ message : e.message })
        }
    }

    async delete(id:string) : Promise<IResponse> {
        try {
            const entityExists = await this.repo.findById(id)

            if (!entityExists) 
                return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

            this.repo.remove(id);

            return new SuccessResponse({
                data: {
                    message: 'Deleted sucessfully'
                }
            })
        } catch (e) {
            return new ServerErrorResponse({ message: e.message })
        }
    }
}