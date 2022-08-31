import CompanyEntity from "../core/entities/CompanyEntity";
import DevEntity from "../core/entities/DevEntity";
import IAuthService from "../core/services/abstract/IAuthService";
import AuthService from "../core/services/concrete/AuthService";
import IAuthRepository from "../infra/repositories/abstract/IAuthRepository";
import IRepository from "../infra/repositories/abstract/IRepository";
import AuthRepository from "../infra/repositories/concrete/AuthRepository";
import CompanyRepository from "../infra/repositories/concrete/CompanyRepository";
import DevRepository from "../infra/repositories/concrete/DevRepository";

export default class AuthModule {
    private authRepo : IAuthRepository
    private devRepo : IRepository<DevEntity>
    private companyRepo : IRepository<CompanyEntity>

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