import IResponse from "../../../Responses/IResponse";
import LoginRequestDTO from "../../dtos/user/LoginRequestDTO";
import UserCreateRequestDTO from "../../dtos/user/UserCreateRequestDTO";

export default interface IAuthService {
    disable(id: string): Promise<IResponse>;
    login(body: LoginRequestDTO): Promise<IResponse>;
    create(body : UserCreateRequestDTO): Promise<IResponse>
}