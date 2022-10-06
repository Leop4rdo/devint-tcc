import CompanyEntity from "@entities/CompanyEntity";
import DevEntity from "@entities/DevEntity";
import IRepository from "@repositories/IRepository";
import BadRequestResponse from "@src/application/Responses/BadRequestResponse";
import IResponse from "@src/application/Responses/IResponse";
import SuccessResponse from "@src/application/Responses/SuccessResponse";
import errors from "@src/helpers/errors";
import { userRoles, IUserProps } from "@src/core/domain/interfaces/IUser";
import DevOutput from "@ports/output/user/DevOutput";
import UserOutput from "@ports/output/user/UserOutput";
import Company from "../domain/Company";
import ICompanyProps from "../domain/interfaces/ICompany";
import IDevProps from "../domain/interfaces/IDev";


export default class UserService {
  private devRepo: IRepository<DevEntity>;
  private companyRepo: IRepository<CompanyEntity>;

  constructor(_devRepo: IRepository<DevEntity>, _companyRepo: IRepository<CompanyEntity>) {
    this.devRepo = _devRepo;
    this.companyRepo = _companyRepo
  }

  async getById(id: string): Promise<IResponse> {
    const user: any = await this.devRepo.findById(id) || await this.companyRepo.findById(id)

    if (!user)
      return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

    const res = new DevOutput({ ...user, role: (user.cnpj) ? userRoles.COMPANY : userRoles.DEV })

    return new SuccessResponse({
      data: res
    })
  }

  async list(): Promise<IResponse> {
    const devs: any[] = await this.devRepo.list() || []
    const companies: any[] = await this.companyRepo.list() || []

    const users = devs.concat(companies)

    const res = users.map((user) => new UserOutput({
      ...user,
      role: (user.cnpj) ? userRoles.COMPANY : userRoles.DEV
    } as IUserProps));

    return new SuccessResponse({
      data: res,
    });
  }


}
