import IRepository from "../../../infra/repositories/abstract/IRepository"
import IResponse from "../../../infra/Responses/IResponse"
import IService from "./IService"

export class AbstractService<T> implements IService<T> {
    private _: IRepository<T>

    constructor(repo: IRepository<T>) {
        this._ = repo
    }

    list = async () : Promise<IResponse> => { /* TODO : implement this */ }

    findById: (id: string) : Promise<IResponse> => { /* TODO : implement this */ }

    findByKey: (key: string, value: any) : Promise<IResponse> => { /* TODO : implement this */ }

    create: (entity: T) : Promise<IResponse> => { /* TODO : implement this */ }

    update: (entity: T) : Promise<IResponse> => { /* TODO : implement this */ }
}