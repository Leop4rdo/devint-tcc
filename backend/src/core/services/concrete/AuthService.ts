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
import IDevProps from "../../interfaces/IDev";
import DevCreateRequestDTO from "../../dtos/user/dev/DevCreateRequestDTO";
import CompanyCreateRequestDTO from "../../dtos/user/company/CompanyCreateRequestDTO";
import ICompanyProps from "../../interfaces/ICompany";
import BusinessLogicError from "../../../handler/BusinessLogicError ";
import { CompanyResponseDTO } from "../../dtos/user/company/CompanyResponseDTO";
import DevResponseDTO from "../../dtos/user/dev/DevResponseDTO";
import IDevRepository from "../../../infra/repositories/abstract/IDevRepository";
import ICompanyRepository from "../../../infra/repositories/abstract/ICompanyRepository";
import DevService from "./DevService";
import IService from "../abstract/IService";
import { IDevService } from "../abstract/IDevService";


export default class AuthService implements IAuthService {
    private repo : IAuthRepository
    private devRepo : IDevRepository
    private companyRepo : ICompanyRepository
    private devService : IDevService

    constructor(
        repo : IAuthRepository, 
        devRepo : IDevRepository, 
        companyRepo : ICompanyRepository,
        devService : IDevService) { 
            this.repo = repo; 
            this.companyRepo = companyRepo;
            this.devRepo = devRepo;
            this.devService = devService;
    }

    async setEnabled(id: string, value: number): Promise<IResponse> {
        const auth = await this.repo.findById(id)

        auth.enabled = value;

        this.repo.update(auth);

        return new SuccessResponse({
            data: `user ${value == 0 ? 'disabled' : 'enabled'} sucessfully!`
        })
    }
    
    async create(body: UserCreateRequestDTO): Promise<IResponse> {
        const dtoValidateRes = await body.validate()

        if (dtoValidateRes) return new BadRequestResponse({
            errorCode : errors.AUTH_SERVICE.code,
            errorMessage : errors.AUTH_SERVICE.message
        })

        if (await this.repo.findBy("email", body.email)){
            return new ServerErrorResponse({
                errorMessage: errors.USER_EMAIL_ALREADY_IN_USE.message,
                errorCode: errors.USER_EMAIL_ALREADY_IN_USE.message,
              });
        }

        body.password = await hash(body.password, 10)
        body.role = (body.cnpj) ? userRoles.COMPANY : userRoles.DEV

        const auth = await this.repo.create(body as unknown as AuthEntity);

        if (!auth) return new ServerErrorResponse({errorMessage : "Cannot create user auth", errorCode: "SE000"})

        const user : any = (body.cnpj) ? 
            await this.createCompany(body, auth)
            : await this.createDev(body, auth);

        if (user.hasError) {
            await this.repo.remove(auth.id)
            return new ServerErrorResponse({errorMessage : "Cannot create user", errorCode: "SE000"})
        }

        user.role = (body.cnpj) ? userRoles.COMPANY : userRoles.DEV

        return new SuccessResponse({
            status: 201,
            data : new UserDTO(user as unknown as IUserProps)
        })
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

        if (!auth || auth.enabled == 0) return new BadRequestResponse(forbiddenResponseProps);

        const isPasswordEquals = await compare(body.password, auth.password);

        if (!isPasswordEquals)
            return new BadRequestResponse(forbiddenResponseProps);


        const user = (auth.role == userRoles.COMPANY) ?
            await this.companyRepo.findByAuthId(auth.id)
        :
            await this.devRepo.findByAuthId(auth.id)

        

        if (!user) return new BadRequestResponse(forbiddenResponseProps);

        const userRes = (auth.role == userRoles.COMPANY) ?
            new CompanyResponseDTO(user as ICompanyProps)
            : new DevResponseDTO(user as unknown as IDevProps) 
        
        new UserDTO({...user, role : auth.role} as unknown as IUserProps);

        const _token = this.createToken(userRes);

        return new SuccessResponse({
            data: {
                token: _token,
                user: userRes,
            },
        });
    }

    private createToken(user: CompanyResponseDTO | DevResponseDTO) {
        return jwt.sign({ ...user }, process.env.SECRET, { expiresIn: "1d" });
    }

    private async createCompany(body : UserCreateRequestDTO, _auth : AuthEntity) : Promise<CompanyEntity | BadRequestResponse> {
        const dto = new CompanyCreateRequestDTO({
            name : body.name,
            cnpj : body.cnpj,
            auth: _auth
        } as unknown as ICompanyProps)

        const dtoValidateRes = await dto.validate()

        if (dtoValidateRes) return new BadRequestResponse({
            errorCode : errors.INVALID_DATA.code,
            errorMessage : errors.INVALID_DATA.message
        })

        return this.companyRepo.create(dto as unknown as CompanyEntity)
    }

    private async createDev(body : UserCreateRequestDTO, _auth : AuthEntity) : Promise<DevEntity | BadRequestResponse>  {
        const dto = new DevCreateRequestDTO({
            name : body.name,
            birthday : body.birthday,
            githubUsername : body.githubUsername,
            auth : _auth
        } as unknown as IDevProps)

        console.log(`dev create dto :`, dto)

        const res = await this.devService.create(dto)

        if (res.hasError) 
            return res as BadRequestResponse
        else 
            return res.data
    }
}