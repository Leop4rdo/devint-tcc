import CompanyEntity from "../core/entities/CompanyEntity";
import DevEntity from "../core/entities/DevEntity";
import UserEntity from "../core/entities/UserEntity";
import IService from "../core/services/abstract/IService";
import IUserService from "../core/services/abstract/IUserService";
import UserService from "../core/services/concrete/UserService";
import IRepository from "../infra/repositories/abstract/IRepository";
import CompanyRepository from "../infra/repositories/concrete/CompanyRepository";
import DevRepository from "../infra/repositories/concrete/DevRepository";
import UserRepository from "../infra/repositories/concrete/UserRepository";

export default class UserModule  {
    private userService: IUserService;

    private devRepository: IRepository<DevEntity>
    private companyRepository: IRepository<CompanyEntity>

    constructor() {
        this.devRepository = new DevRepository()
        this.companyRepository = new CompanyRepository()

        this.userService = new UserService(this.devRepository, this.companyRepository)
    }


    getDevRepository = () => this.devRepository

    getCompanyRepository = () => this.companyRepository

    getUserService = () => this.userService
}