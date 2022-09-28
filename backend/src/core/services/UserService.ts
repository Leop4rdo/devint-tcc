import CompanyEntity from "../../adapters/database/entities/CompanyEntity";
import DevEntity from "../../adapters/database/entities/DevEntity";
import IRepository from "../../adapters/database/repositories/IRepository";
import BadRequestResponse from "../../application/Responses/BadRequestResponse";
import IResponse from "../../application/Responses/IResponse";
import SuccessResponse from "../../application/Responses/SuccessResponse";
import errors from "../../helpers/errors";
import { userRoles, IUserProps } from "../../interfaces/IUser";
import DevOutput from "../../ports/output/user/DevOutput";
import UserOutput from "../../ports/output/user/UserOutput";


export default class UserService {
  private devRepo : IRepository<DevEntity>;
  private companyRepo : IRepository<CompanyEntity>;

  constructor(_devRepo: IRepository<DevEntity>, _companyRepo: IRepository<CompanyEntity>) {
    this.devRepo = _devRepo;
    this.companyRepo = _companyRepo
  }

  async getById(id: string): Promise<IResponse> {
    const user : any = await this.devRepo.findById(id) || await this.companyRepo.findById(id)

    if (!user) 
      return new BadRequestResponse({ message : errors.ENTITY_NOT_FOUND })

    const res = new DevOutput({...user, role : (user.cnpj) ? userRoles.COMPANY : userRoles.DEV})

    return new SuccessResponse({
      data : res
    })
  }

  async list(): Promise<IResponse> {
    const devs : any[] = await this.devRepo.list() || []
    const companies : any[] = await this.companyRepo.list() || []
    
    const users = devs.concat(companies)

    const res = users.map((user) => new UserOutput({
      ...user,
      role : (user.cnpj) ? userRoles.COMPANY : userRoles.DEV
    } as IUserProps));

    return new SuccessResponse({
      data: res,
    });
  }

  
}
