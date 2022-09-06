import CompanyEntity from "../core/entities/CompanyEntity";
import DevEntity from "../core/entities/DevEntity";
import IAuthService from "../core/services/abstract/IAuthService";
import AuthService from "../core/services/concrete/AuthService";
import IAuthRepository from "../infra/repositories/abstract/IAuthRepository";
import ICompanyRepository from "../infra/repositories/abstract/ICompanyRepository";
import IDevRepository from "../infra/repositories/abstract/IDevRepository";
import IRepository from "../infra/repositories/abstract/IRepository";
import AuthRepository from "../infra/repositories/concrete/AuthRepository";
import CompanyRepository from "../infra/repositories/concrete/CompanyRepository";
import DevRepository from "../infra/repositories/concrete/DevRepository";

export default class AuthModule {
    private authRepo : IAuthRepository
    private devRepo : IDevRepository
    private companyRepo : ICompanyRepository

    private authService : IAuthService

    constructor() {
        this.authRepo = new AuthRepository();
        this.devRepo = new DevRepository();
        this.companyRepo = new CompanyRepository();
        
        this.authService = new AuthService(this.authRepo, this.devRepo, this.companyRepo);
    }

    getAuthService = () => this.authService

    getAuthRepository = () => this.authRepo
    getCompanyRepository = () => this.companyRepo
    getDevRepository = () => this.devRepo
}