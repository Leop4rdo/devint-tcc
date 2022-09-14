import CompanyEntity from "../core/entities/CompanyEntity";
import DevEntity from "../core/entities/DevEntity";
import PasswordResetTokenEntity from "../core/entities/PasswordResetTokenEntity";
import IAuthService from "../core/services/abstract/IAuthService";
import IEmailService from "../core/services/abstract/IEmailService";
import AuthService from "../core/services/concrete/AuthService";
import EmailService from "../core/services/concrete/EmailService";
import AbstractRepository from "../infra/repositories/abstract/AbstractRepository";
import IAuthRepository from "../infra/repositories/abstract/IAuthRepository";
import ICompanyRepository from "../infra/repositories/abstract/ICompanyRepository";
import IDevRepository from "../infra/repositories/abstract/IDevRepository";
import IRepository from "../infra/repositories/abstract/IRepository";
import AuthRepository from "../infra/repositories/concrete/AuthRepository";
import CompanyRepository from "../infra/repositories/concrete/CompanyRepository";
import DevRepository from "../infra/repositories/concrete/DevRepository";
import PasswordResetTokenRepository from "../infra/repositories/concrete/PasswordResetTokenRepository";

export default class AuthModule {
    private authRepo : IAuthRepository
    private devRepo : IDevRepository
    private companyRepo : ICompanyRepository
    private passResetTokenRepo : IRepository<PasswordResetTokenEntity>
    private emailService : IEmailService

    private authService : IAuthService

    constructor() {
        this.authRepo = new AuthRepository();
        this.devRepo = new DevRepository();
        this.companyRepo = new CompanyRepository();
        this.passResetTokenRepo = new PasswordResetTokenRepository();
        this.emailService = new EmailService();

        this.authService = new AuthService(this.authRepo, this.devRepo, this.companyRepo, this.passResetTokenRepo, this.emailService);
    }

    getAuthService = () => this.authService

    getAuthRepository = () => this.authRepo
    getCompanyRepository = () => this.companyRepo
    getDevRepository = () => this.devRepo
}
