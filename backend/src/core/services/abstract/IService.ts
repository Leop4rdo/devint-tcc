import IResponse from "../../../infra/Responses/IResponse"

// TODO : make this a decorator
export default interface IService<T> {
    list        : () => Promise<IResponse>
    findById    : (id : string) => Promise<IResponse>
    findByKey   : (key : string, value : any) => Promise<IResponse>
    create      : (entity : T) => Promise<IResponse>
    update      : (entity : T) => Promise<IResponse>
}