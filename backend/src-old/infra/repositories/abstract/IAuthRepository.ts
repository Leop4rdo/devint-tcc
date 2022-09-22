import AuthEntity from "../../../core/entities/AuthEntity";

export default interface IAuthRepository {
    findBy : (key : keyof AuthEntity | string, value : any) => Promise<AuthEntity>
    findById : (id : string) => Promise<AuthEntity>
    create : (entity : AuthEntity) => Promise<AuthEntity>
    update : (entity : AuthEntity) => Promise<AuthEntity>
    remove : (id : string) => Promise<AuthEntity>
}