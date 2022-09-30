import {Timestamp} from "typeorm";
import AuthEntity from "../../../adapters/database/entities/AuthEntity";
import IAuthProps from "./IAuth";

export interface IPasswordResetToken {
    id : string
    token : string
    expirationDate : number
    owner : IAuthProps
}
