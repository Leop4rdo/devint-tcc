import { error } from "console";
import IRepository from "../../../src-old/infra/repositories/abstract/IRepository";
import CompanyRepository from "../../../src-old/infra/repositories/concrete/CompanyRepository";
import CompanyEntity from "../../adapters/database/entities/CompanyEntity";
import IResponse from "../../application/Responses/IResponse";
import BusinessLogicError from "../../helpers/BusinessLogicError ";
import errors from "../../helpers/errors";
import { AbstractService } from "./AbstractService";


export default class CompanyService extends AbstractService<CompanyEntity> {
    constructor(_repo: IRepository<CompanyEntity>) {
        super(_repo);
    }
    
    override delete(id: string): Promise<IResponse> {
        throw new BusinessLogicError({
            errorMessage: errors.USER_CAN_NOT_BE_DELETED.message,
            errorCode: errors.USER_CAN_NOT_BE_DELETED.code
        })
    }
}