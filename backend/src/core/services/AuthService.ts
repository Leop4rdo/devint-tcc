import { hash, compare } from "bcrypt";
import * as jwt from "jsonwebtoken";
import AuthEntity from "@entities/AuthEntity";
import CompanyEntity from "@entities/CompanyEntity";
import DevEntity from "@entities/DevEntity";
import PasswordResetTokenEntity from "@entities/PasswordResetTokenEntity";
import AuthRepository from "@repositories/AuthRepository";
import CompanyRepository from "@repositories/CompanyRepository";
import DevRepository from "@repositories/DevRepository";
import PasswordResetTokenRepository from "@repositories/PasswordResetTokenRepository";
import EmailService, { EmailTemplates } from "@adapters/mail/EmailService";
import BadRequestResponse from "@src/application/Responses/BadRequestResponse";
import ForbiddenResponse from "@src/application/Responses/ForbiddenResponse";
import forbiddenResponse from "@src/application/Responses/ForbiddenResponse";
import IResponse from "@src/application/Responses/IResponse";
import ServerErrorResponse from "@src/application/Responses/ServerErrorResponse";
import SuccessResponse from "@src/application/Responses/SuccessResponse";
import errors from "@src/helpers/errors";
import { generateToken } from "@src/helpers/utils";
import ICompanyProps from "@src/core/domain/interfaces/ICompany";
import IDevProps from "@src/core/domain/interfaces/IDev";
import { userRoles, IUserProps } from "@src/core/domain/interfaces/IUser";
import CompanyCreateInput from "@ports/input/user/company/CompanyCreateInput";
import DevCreateInput from "@ports/input/user/dev/DevCreateInput";
import LoginInput from "@ports/input/user/LoginInput";
import UserCreateInput from "@ports/input/user/UserCreateInput";
import CompanyOutput from "@ports/output/user/CompanyOutput";
import DevOutput from "@ports/output/user/DevOutput";
import UserOutput from "@ports/output/user/UserOutput";
import DevService from "./DevService";

export default class AuthService {
    private repo: AuthRepository
    private devRepo: DevRepository
    private companyRepo: CompanyRepository
    private passResetTokenRepo: PasswordResetTokenRepository
    private emailService: EmailService
    private devService: DevService

    constructor(
        repo: AuthRepository,
        devRepo: DevRepository,
        companyRepo: CompanyRepository,
        passResetTokenRepo: PasswordResetTokenRepository,
        emailService: EmailService,
        devService: DevService) {
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
        this.repo.update(auth as AuthEntity);

        return new SuccessResponse({
            data: `user ${value == 0 ? 'disabled' : 'enabled'} sucessfully!`
        })
    }

    async create(body: UserCreateInput): Promise<IResponse> {
        await body.validate()

        if (await this.repo.findBy("email", body.email))
            return new ServerErrorResponse({ message: errors.USER_EMAIL_ALREADY_IN_USE });

        body.password = await hash(body.password, 10)
        body.role = (body.cnpj) ? userRoles.COMPANY : userRoles.DEV

        const auth = await this.repo.create(body as unknown as AuthEntity);

        if (!auth) return new ServerErrorResponse({ message: "Cannot create user auth" })

        try {

            const user: any = (body.cnpj) ? await this.createCompany(body, auth) : await this.createDev(body, auth);

            user.role = (body.cnpj) ? userRoles.COMPANY : userRoles.DEV

            this.emailService.send({
                to: auth.email,
                subject: 'Confirmação de email',
                values: {
                    USER: user.name,
                    LINK: `${process.env.FRONTEND_URL}/email-confirm/${auth.email}`
                }
            }, EmailTemplates.EMAIL_CONFIRM)

            return new SuccessResponse({
                status: 201,
                data: new UserOutput(user as unknown as IUserProps)
            })
        } catch (e) {
            await this.repo.remove(auth.id)
            console.log(e)
            return new ServerErrorResponse({ message: "Cannot create user" })
        }
    }

    async login(body: LoginInput): Promise<IResponse> {
        try {

        await body.validate()

        const auth = await this.repo.findBy("email", body.email);

        if (!auth || auth.enabled == 0) return new ForbiddenResponse();

        const isPasswordEquals = await compare(body.password, auth.password);

        if (!isPasswordEquals)
            return new forbiddenResponse();

        const user = (auth.role == userRoles.COMPANY) ?
            await this.companyRepo.findByAuthId(auth.id)
            :
            await this.devRepo.findByAuthId(auth.id)

        if (!user) return new forbiddenResponse();

        const userRes = (auth.role == userRoles.COMPANY) ?
            new CompanyOutput(user as unknown as ICompanyProps)
            : new DevOutput(user as unknown as IDevProps)

        new UserOutput({ ...user, role: auth.role } as unknown as IUserProps);

        const _token = this.createToken(userRes);

        return new SuccessResponse({
            data: {
                token: _token,
                user: userRes,
            },
        });
        } catch(err) {
            console.log(err)
            throw err
        }

    }

    private createToken(user: CompanyOutput | DevOutput) {
        return jwt.sign({ ...user }, process.env.SECRET, { expiresIn: "1d" });
    }

    private async createCompany(body: UserCreateInput, _auth: AuthEntity): Promise<CompanyEntity | BadRequestResponse> {
        const dto = new CompanyCreateInput({
            name: body.name,
            cnpj: body.cnpj,
            auth: _auth
        } as unknown as ICompanyProps)

        await body.validate()

        return this.companyRepo.create(dto as unknown as CompanyEntity)
    }

    private async createDev(body: UserCreateInput, _auth: AuthEntity): Promise<DevEntity | BadRequestResponse> {
        const dto = new DevCreateInput({
            name: body.name,
            birthday: body.birthday,
            githubUsername: body.githubUsername,
            gender: body.gender,
            auth: _auth
        } as unknown as IDevProps)

        const res = await this.devService.create(dto)

        return (res.hasError) ? res as BadRequestResponse : res.data
    }

    async requestPasswordRecovery(email: string): Promise<IResponse> {
        const auth = await this.repo.findBy('email', email)

        if (!auth || auth.enabled == 0)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        const user = (auth.role == userRoles.COMPANY) ?
            await this.companyRepo.findByAuthId(auth.id)
            : await this.devRepo.findByAuthId(auth.id)

        if (!user)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        const passResetToken = new PasswordResetTokenEntity();
        passResetToken.token = generateToken()
        passResetToken.owner = auth;
        passResetToken.expirationDate = Date.now() + 3600000;

        await this.passResetTokenRepo.create(passResetToken);

        await this.emailService.send({
            to: auth.email,
            subject: 'Recuperação de senha',
            values: {
                USER: user.name,
                LINK: `${process.env.FRONTEND_URL}/change-my-password/${passResetToken.token}`
            }
        }, EmailTemplates.PASSWORD_RECOVERY)

        return new SuccessResponse({
            status: 200,
            data: {
                message: 'Success'
            }
        })
    }

    async emailConfirm(email: string): Promise<IResponse> {
        const auth = await this.repo.findBy('email', email)

        auth.emailConfirmed = true

        this.repo.update(auth)

        return new SuccessResponse({
            data: `Email Confirmed sucessfully!`
        })

    }

    async changePassword(password, token): Promise<IResponse> {
        const passRecoveryToken = await this.passResetTokenRepo.findBy('token', token);

        if (!passRecoveryToken || passRecoveryToken.expirationDate < Date.now())
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        const updated = passRecoveryToken.owner
        updated.password = await hash(password, 10)
        await this.repo.update(updated)

        this.passResetTokenRepo.remove(passRecoveryToken.id)

        return new SuccessResponse({
            status: 200,
            data: {
                message: 'Success'
            }
        })
    }
}


