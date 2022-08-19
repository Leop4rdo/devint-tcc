import IResponse from "../../../Responses/IResponse"

// TODO : make this a decorator
export default interface IService<T> {

    list() : Promise<IResponse> 

    findById(id : string) : Promise<IResponse>

    create(entity : T) : Promise<IResponse>

    update(entity : T, id : string) : Promise<IResponse>

    delete(id : string) : Promise<IResponse>
}