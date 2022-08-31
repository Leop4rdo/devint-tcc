
import IRepository from "../../../infra/repositories/abstract/IRepository";
import IResponse from "../../../Responses/IResponse";
import SuccessResponse from "../../../Responses/SuccessResponse";
import UserDTO from "../../dtos/user/UserDTO";
import { IUserProps } from "../../interfaces/IUser";
import IUserService from "../abstract/IUserService";
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
