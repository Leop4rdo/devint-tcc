import { error } from "console";
import CompanyEntity from "@entities/CompanyEntity";
import CompanyRepository from "@repositories/CompanyRepository";
import IResponse from "@src/application/Responses/IResponse";
import BusinessLogicError from "@src/helpers/BusinessLogicError ";
import errors from "@src/helpers/errors";
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