import { hash, compare } from "bcrypt";
import { Entity } from "typeorm";
import errors from "../../../handler/errors.handler";
import IRepository from "../../../infra/repositories/abstract/IRepository";
import BadRequestResponse from "../../../Responses/BadRequestResponse";
import IResponse from "../../../Responses/IResponse";
import ServerErrorResponse from "../../../Responses/ServerErrorResponse";
import SuccessResponse from "../../../Responses/SuccessResponse";
import LoginDTO from "../../dtos/user/LoginRequestDTO";
import UserCreateDTO from "../../dtos/user/UserCreateRequestDTO";
import UserDTO from "../../dtos/user/UserDTO";
import UserEntity from "../../entities/UserEntity";
import { IUserProps } from "../../interfaces/IUser";
import { AbstractService } from "../abstract/AbstractService";
import IUserService from "../abstract/IUserService";
import * as jwt from "jsonwebtoken";
import DevRepository from "../../../infra/repositories/concrete/DevRepository";
import CompanyRepository from "../../../infra/repositories/concrete/CompanyRepository";
import DevEntity from "../../entities/DevEntity";
import CompanyEntity from "../../entities/CompanyEntity";

export default class UserService implements IUserService {
  private devRepo : IRepository<DevEntity>;
  private companyRepo : IRepository<CompanyEntity>;

  constructor(_devRepo: IRepository<DevEntity>, _companyRepo: IRepository<CompanyEntity>) {
    this.devRepo = _devRepo;
    this.companyRepo = _companyRepo
  }

  async list(): Promise<IResponse> {
    const devs : any[] = await this.devRepo.list()
    const companies : any[] = await this.companyRepo.list()
    
    const users = devs.concat(companies)

    const res = users.map((user) => new UserDTO(user as IUserProps));

    return new SuccessResponse({
      data: res,
    });
  }
}
