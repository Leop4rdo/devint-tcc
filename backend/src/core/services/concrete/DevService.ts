import { error } from "console";
import BusinessLogicError from "../../../handler/BusinessLogicError ";
import errors from "../../../handler/errors.handler";
import IRepository from "../../../infra/repositories/abstract/IRepository";
import IResponse from "../../../Responses/IResponse";
import DevEntity from "../../entities/DevEntity";
import { AbstractService } from "../abstract/AbstractService";
import IService from "../abstract/IService";

export default class DevService extends AbstractService<DevEntity> {
    constructor(_repo: IRepository<DevEntity>) {
        super(_repo);
    }
    
    override delete(id: string): Promise<IResponse> {
        throw new BusinessLogicError({
            errorMessage: errors.USER_CAN_NOT_BE_DELETED.message,
            errorCode: errors.USER_CAN_NOT_BE_DELETED.code
        })
    }
}