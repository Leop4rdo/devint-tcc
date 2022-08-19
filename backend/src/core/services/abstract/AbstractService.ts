import errors from "../../../handler/errors.handler"
import IRepository from "../../../infra/repositories/abstract/IRepository"
import BadRequestResponse from "../../../Responses/BadRequestResponse"
import IResponse from "../../../Responses/IResponse"
import ServerErrorResponse from "../../../Responses/ServerErrorResponse"
import SuccessResponse from "../../../Responses/SuccessResponse"
import IService from "./IService"

export abstract class  AbstractService<T> implements IService<T> {
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
            return new ServerErrorResponse({ 
                errorMessage: e.errorMessage
            })
        }
    }

    async findById(id: string) : Promise<IResponse> {
        try {

            return new SuccessResponse({
                data: await this.repo.findById(id)
            })

        } catch (e) {
            return new ServerErrorResponse({ 
                errorMessage: e.errorMessage
            })
        }
    }

    async create(entity: T) : Promise<IResponse> {
        try {

            return new SuccessResponse({
                status: 201,
                data: await this.repo.create(entity)
            })

        } catch (e) {
            return new ServerErrorResponse({ 
                errorMessage: e.errorMessage
            })
        }
    }

    async update(entity: T, id : string) : Promise<IResponse> {
        try {

            const entityExists = await this.repo.findById(id)

            if (!entityExists) {
                return new BadRequestResponse({
                    errorMessage: errors.ENTITY_NOT_FOUND.message,
                    errorCode: errors.ENTITY_NOT_FOUND.code
                })
            }

            for (const [key, value] of Object.entries(entity)) {
                entityExists[key] = value
            }

            await this.repo.update(entityExists)

            return new SuccessResponse({
                status: 204,
                data: entityExists
            })

        } catch (e) {
            return new ServerErrorResponse({ 
                errorMessage: e.errorMessage
            })
        }
    }

    async delete(id:string) : Promise<IResponse> {
        try {
            const entityExists = await this.repo.findById(id)

            if (!entityExists) {
                return new BadRequestResponse({
                    errorMessage: errors.ENTITY_NOT_FOUND.message,
                    errorCode: errors.ENTITY_NOT_FOUND.code
                })
            }

            this.repo.remove(id);
        } catch (e) {
            return new ServerErrorResponse({ 
                errorMessage: e.errorMessage
            })
        }
    }
}