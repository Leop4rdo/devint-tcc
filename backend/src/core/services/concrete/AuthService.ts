import { hash, compare } from "bcrypt";
import * as jwt from "jsonwebtoken";
import BusinessLogicError from "../../../handler/BusinessLogicError ";
import errors from "../../../handler/errors.handler";
import IAuthRepository from "../../../infra/repositories/abstract/IAuthRepository";
import ICompanyRepository from "../../../infra/repositories/abstract/ICompanyRepository";
import IDevRepository from "../../../infra/repositories/abstract/IDevRepository";
import IRepository from "../../../infra/repositories/abstract/IRepository";
import BadRequestResponse from "../../../Responses/BadRequestResponse";
import IResponse from "../../../Responses/IResponse";
import ServerErrorResponse from "../../../Responses/ServerErrorResponse";
import SuccessResponse from "../../../Responses/SuccessResponse";
import CompanyCreateRequestDTO from "../../dtos/user/company/CompanyCreateRequestDTO";
import { CompanyResponseDTO } from "../../dtos/user/company/CompanyResponseDTO";
import DevCreateRequestDTO from "../../dtos/user/dev/DevCreateRequestDTO";
import DevResponseDTO from "../../dtos/user/dev/DevResponseDTO";
import LoginRequestDTO from "../../dtos/user/LoginRequestDTO";
import UserCreateRequestDTO from "../../dtos/user/UserCreateRequestDTO";
import UserDTO from "../../dtos/user/UserDTO";
import AuthEntity from "../../entities/AuthEntity";
import CompanyEntity from "../../entities/CompanyEntity";
import DevEntity from "../../entities/DevEntity";
import PasswordResetTokenEntity from "../../entities/PasswordResetTokenEntity";
import ICompanyProps from "../../interfaces/ICompany";
import IDevProps from "../../interfaces/IDev";
import { userRoles, IUserProps } from "../../interfaces/IUser";
import IAuthService from "../abstract/IAuthService";
import { IDevService } from "../abstract/IDevService";
import IEmailService from "../abstract/IEmailService";
import { EmailTemplates } from "./EmailService";


export default class AuthService implements IAuthService {
    private repo : IAuthRepository
    private devRepo : IDevRepository
    private companyRepo : ICompanyRepository
    private passResetTokenRepo : IRepository<PasswordResetTokenEntity>
    private emailService : IEmailService
    private devService : IDevService

    constructor(
        repo : IAuthRepository, 
        devRepo : IDevRepository, 
        companyRepo : ICompanyRepository,
        passResetTokenRepo : IRepository<PasswordResetTokenEntity>,
        emailService : IEmailService,
        devService : IDevService) { 
            this.repo = repo; 
            this.companyRepo = companyRepo;
            this.devRepo = devRepo;
            this.passResetTokenRepo = passResetTokenRepo;
            this.emailService = emailService;
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
        await body.validate()

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

        const user : any = (body.cnpj) ? await this.createCompany(body, auth) : await this.createDev(body, auth);

        if (user.hasError || !user) {
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
        await body.validate()

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

        await body.validate()

        return this.companyRepo.create(dto as unknown as CompanyEntity)
    }

    private async createDev(body : UserCreateRequestDTO, _auth : AuthEntity) : Promise<DevEntity | BadRequestResponse>  {
        const dto = new DevCreateRequestDTO({
            name : body.name,
            birthday : body.birthday,
            githubUsername : body.githubUsername,
            gender : body.gender,
            auth : _auth
        } as unknown as IDevProps)

        const res = await this.devService.create(dto)

        return (res.hasError) ? res as BadRequestResponse : res.data
    }

    async requestPasswordRecovery(email : string): Promise<IResponse> {
        const auth = await this.repo.findBy('email', email)
        
        if (!auth || auth.enabled == 0) 
            return new BadRequestResponse({
                errorMessage : errors.ENTITY_NOT_FOUND.message,
                errorCode: errors.ENTITY_NOT_FOUND.code
            })
        
        const user = (auth.role == userRoles.COMPANY) ?
            await this.companyRepo.findByAuthId(auth.id)
            :await this.devRepo.findByAuthId(auth.id)

        if (!user) 
            return new BadRequestResponse({
                errorMessage : errors.ENTITY_NOT_FOUND.message,
                errorCode: errors.ENTITY_NOT_FOUND.code
            })

        const passResetToken = new PasswordResetTokenEntity();
        passResetToken.token = this.generateToken()
        passResetToken.owner = auth;
        passResetToken.expirationDate = Date.now() + 3600000;

        await this.passResetTokenRepo.create(passResetToken);

        await this.emailService.send({
            to : auth.email,
            subject : 'Recuperação de senha',
            values : {
                USER : user.name,
                LINK : `${process.env.FRONTEND_URL}/change-my-password/${passResetToken.token}`
            }
        }, EmailTemplates.PASSWORD_RECOVERY)

        return new SuccessResponse({
            status : 200,
            data : {
                message : 'Success'
            }
        })
    }

    async changePassword(password, token) : Promise<IResponse>{
        const passRecoveryToken = await this.passResetTokenRepo.findBy('token', token);

        if (!passRecoveryToken || passRecoveryToken.expirationDate < Date.now())
            return new BadRequestResponse({
                errorMessage : errors.ENTITY_NOT_FOUND.message,
                errorCode: errors.ENTITY_NOT_FOUND.code
            })
        
        const updated = passRecoveryToken.owner
        updated.password = await hash(password, 10)
        
        console.log(updated)
        await this.repo.update(updated)

        this.passResetTokenRepo.remove(passRecoveryToken.id)
           
        return new SuccessResponse({
            status : 200,
            data : {
                message : 'Success'
            }
        }) 
    }

    private generateToken() {
        const chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let token = ""

        for (let i = 0; i < 32; i++) {
            token += chars.charAt(Math.floor(Math.random() * chars.length))
        }

        return token
    }
}


