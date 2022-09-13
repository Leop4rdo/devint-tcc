import IResponse from "../../../Responses/IResponse";
import LoginRequestDTO from "../../dtos/user/LoginRequestDTO";
import UserCreateRequestDTO from "../../dtos/user/UserCreateRequestDTO";

export default interface IAuthService {
    setEnabled(id : string, value : number) : Promise<IResponse>
    login(body: LoginRequestDTO): Promise<IResponse>;
    requestPasswordRecovery(email : string) : Promise<IResponse>;
    // updatePassword() : Promise<IResponse>
    create(body : UserCreateRequestDTO): Promise<IResponse>
}
