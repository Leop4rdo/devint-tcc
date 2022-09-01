import CompanyEntity from "../../../core/entities/CompanyEntity";
import IRepository from "./IRepository";

export default interface ICompanyRepository extends IRepository<CompanyEntity> {
    findByAuthId : (id : string) => Promise<CompanyEntity>
}