import UserEntity from "../core/entities/UserEntity";
import IService from "../core/services/abstract/IService";
import IUserService from "../core/services/abstract/IUserService";
import UserService from "../core/services/concrete/UserService";
import IRepository from "../infra/repositories/abstract/IRepository";
import UserRepository from "../infra/repositories/concrete/UserRepository";

export default class UserModule  {
    private userRepository : IRepository<UserEntity>
    private userService : IUserService

    constructor() {
        this.userRepository = new UserRepository()
        this.userService = new UserService(this.userRepository)
    }

    getUserRepository = () => this.userRepository

    getUserService = () => this.userService
}