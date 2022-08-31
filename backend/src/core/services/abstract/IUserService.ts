import IResponse from "../../../Responses/IResponse";
import LoginRequestDTO from "../../dtos/user/LoginRequestDTO";
import UserCreateDTO from "../../dtos/user/UserCreateRequestDTO";
import UserEntity from "../../entities/UserEntity";
import IService from "./IService";

export default interface IUserService {
  list(): Promise<IResponse>;
}
