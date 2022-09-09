
import IRepository from "../../../infra/repositories/abstract/IRepository";
import IResponse from "../../../Responses/IResponse";
import SuccessResponse from "../../../Responses/SuccessResponse";
import UserDTO from "../../dtos/user/UserDTO";
import { IUserProps, userRoles } from "../../interfaces/IUser";
import IUserService from "../abstract/IUserService";
import DevEntity from "../../entities/DevEntity";
import CompanyEntity from "../../entities/CompanyEntity";
import BadRequestResponse from "../../../Responses/BadRequestResponse";
import errors from "../../../handler/errors.handler";

export default class UserService implements IUserService {
  private devRepo : IRepository<DevEntity>;
  private companyRepo : IRepository<CompanyEntity>;

  constructor(_devRepo: IRepository<DevEntity>, _companyRepo: IRepository<CompanyEntity>) {
    this.devRepo = _devRepo;
    this.companyRepo = _companyRepo
  }

  async getById(id: string): Promise<IResponse> {
    const user : any = await this.devRepo.findById(id) || await this.companyRepo.findById(id)

    if (!user) 
      return new BadRequestResponse({
        errorMessage : errors.ENTITY_NOT_FOUND.message,
        errorCode : errors.ENTITY_NOT_FOUND.code
      })

    const resDTO = new UserDTO({...user, role : (user.cnpj) ? userRoles.COMPANY : userRoles.DEV})
    console.log(resDTO);

    return new SuccessResponse({
      data : resDTO
    })
  }

  async list(): Promise<IResponse> {
    const devs : any[] = await this.devRepo.list() || []
    const companies : any[] = await this.companyRepo.list() || []
    
    const users = devs.concat(companies)

    const res = users.map((user) => new UserDTO({
      ...user,
      role : (user.cnpj) ? userRoles.COMPANY : userRoles.DEV
    } as IUserProps));

    return new SuccessResponse({
      data: res,
    });
  }

  
}
