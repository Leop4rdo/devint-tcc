import IResponse from "../../../Responses/IResponse"
import UserCreateDTO from "../../dtos/user/UserCreateDTO"
import UserEntity from "../../entities/UserEntity"
import IService from "./IService"

export default interface IUserService extends IService<UserEntity>{

    list() : Promise<IResponse> 

    findById(id : string) : Promise<IResponse>

    create(entity : UserCreateDTO) : Promise<IResponse>

    update(entity : UserCreateDTO, id : string) : Promise<IResponse>

    disable(id : string) : Promise<IResponse> 
}