import { error } from "console";
import CompanyEntity from "../../adapters/database/entities/CompanyEntity";
import CompanyRepository from "../../adapters/database/repositories/CompanyRepository";
import IResponse from "../../application/Responses/IResponse";
import BusinessLogicError from "../../helpers/BusinessLogicError ";
import errors from "../../helpers/errors";
import { AbstractService } from "./AbstractService";


export default class CompanyService extends AbstractService<CompanyEntity> {
    constructor(_repo: CompanyRepository) {
        super(_repo);
    }
    
    override delete(id: string): Promise<IResponse> {
        throw new BusinessLogicError({
            errorMessage: errors.USER_CAN_NOT_BE_DELETED,
        })
    }
}