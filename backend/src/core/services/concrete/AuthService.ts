import { compare, hash } from "bcrypt";
import errors from "../../../handler/errors.handler";
import IAuthRepository from "../../../infra/repositories/abstract/IAuthRepository";
import IRepository from "../../../infra/repositories/abstract/IRepository";
import CompanyRepository from "../../../infra/repositories/concrete/CompanyRepository";
import BadRequestResponse from "../../../Responses/BadRequestResponse";
import IResponse from "../../../Responses/IResponse";
import SuccessResponse from "../../../Responses/SuccessResponse";
import LoginRequestDTO from "../../dtos/user/LoginRequestDTO";
import UserDTO from "../../dtos/user/UserDTO";
import DevEntity from "../../entities/DevEntity";
import { IUserProps, userRoles } from "../../interfaces/IUser";
import IAuthService from "../abstract/IAuthService";

import * as jwt from "jsonwebtoken";
import UserCreateRequestDTO from "../../dtos/user/UserCreateRequestDTO";
import CompanyEntity from "../../entities/CompanyEntity";
import ServerErrorResponse from "../../../Responses/ServerErrorResponse";
import AuthEntity from "../../entities/AuthEntity";


export default class AuthService implements IAuthService {
    private repo : IAuthRepository
    private devRepo : IRepository<DevEntity>
    private companyRepo : IRepository<CompanyEntity>

    constructor(
        repo : IAuthRepository, 
        devRepo : IRepository<DevEntity>, 
        companyRepo : IRepository<CompanyEntity>) { 
            this.repo = repo; 
            this.companyRepo = companyRepo;
            this.devRepo = devRepo;
    }
    
    
    async create(body: UserCreateRequestDTO): Promise<IResponse> {
        const dtoValidateRes = await body.validate()

        if (dtoValidateRes) return new BadRequestResponse({
            errorCode : errors.INVALID_DATA.code,
            errorMessage : errors.INVALID_DATA.message
        })

        if (await this.repo.findBy("email", body.email)){
            return new ServerErrorResponse({
                errorMessage: errors.USER_EMAIL_ALREADY_IN_USE.message,
                errorCode: errors.USER_EMAIL_ALREADY_IN_USE.message,
              });
        }

        body.password = await hash(body.password, 10)

        const auth = await this.repo.create(body as unknown as AuthEntity);

        const user = (body.role === userRoles.COMPANY) ? 
            await this.companyRepo.create(body as unknown as CompanyEntity) 
            : await this.devRepo.create(body as unknown as DevEntity);

        user.auth = auth

        return new SuccessResponse({
            status: 201,
            data : new UserDTO(user as unknown as IUserProps)
        })
    }

    async disable(id: string): Promise<IResponse> {
        throw new Error("Not implemented");
    }

    async login(body: LoginRequestDTO): Promise<IResponse> {
        const dtoValidateRes = await body.validate()
        if (dtoValidateRes) return dtoValidateRes

        const auth = await this.repo.findBy("email", body.email);

        const forbiddenResponseProps = {
            status: 403,
            errorCode: errors.LOGIN_FAILED.code,
            errorMessage: errors.LOGIN_FAILED.message,
        };

        if (!auth || !auth.enabled) return new BadRequestResponse(forbiddenResponseProps);

        const isPasswordEquals = await compare(body.password, auth.password);

        if (!isPasswordEquals)
            return new BadRequestResponse(forbiddenResponseProps);

        const user = (auth.role === userRoles.DEV) ?
            await this.devRepo.findBy('auth', auth.id)
        :
            await this.companyRepo.findBy('auth', auth.id);

        const userRes = new UserDTO({...user, role : auth.role} as unknown as IUserProps);

        const _token = this.createToken(userRes);

        return new SuccessResponse({
        data: {
            token: _token,
            user: userRes,
        },
        });
    }

    private createToken(user: UserDTO) {
        return jwt.sign({ ...user }, process.env.SECRET, { expiresIn: "1d" });
    }
}