import PasswordResetTokenEntity from "../core/entities/PasswordResetTokenEntity"
import IAuthService from "../core/services/abstract/IAuthService"
import { IDevService } from "../core/services/abstract/IDevService"
import IEmailService from "../core/services/abstract/IEmailService"
import AuthService from "../core/services/concrete/AuthService"
import DevService from "../core/services/concrete/DevService"
import EmailService from "../core/services/concrete/EmailService"
import IAuthRepository from "../infra/repositories/abstract/IAuthRepository"
import ICompanyRepository from "../infra/repositories/abstract/ICompanyRepository"
import IDevRepository from "../infra/repositories/abstract/IDevRepository"
import IRepository from "../infra/repositories/abstract/IRepository"
import AuthRepository from "../infra/repositories/concrete/AuthRepository"
import CompanyRepository from "../infra/repositories/concrete/CompanyRepository"
import DevRepository from "../infra/repositories/concrete/DevRepository"
import PasswordResetTokenRepository from "../infra/repositories/concrete/PasswordResetTokenRepository"


export default class AuthModule {
    private authRepo : IAuthRepository
    private devRepo : IDevRepository
    private companyRepo : ICompanyRepository
    private passResetTokenRepo : IRepository<PasswordResetTokenEntity>
    private emailService : IEmailService
    private devService : IDevService

    private authService : IAuthService

    constructor() {
        this.authRepo = new AuthRepository();
        this.devRepo = new DevRepository();
        this.companyRepo = new CompanyRepository();
        this.passResetTokenRepo = new PasswordResetTokenRepository();
        this.emailService = new EmailService();
        this.devService = new DevService(this.devRepo);
        
        this.authService = new AuthService(this.authRepo, this.devRepo, this.companyRepo, this.passResetTokenRepo, this.emailService, this.devService);
    }

    getAuthService = () => this.authService

    getAuthRepository = () => this.authRepo
    getCompanyRepository = () => this.companyRepo
    getDevRepository = () => this.devRepo
}
