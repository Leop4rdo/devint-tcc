import {Timestamp} from "typeorm";
import AuthEntity from "../adapters/database/entities/AuthEntity";

export interface IPasswordResetToken {
    id : string
    token : string
    expirationDate : number
    owner : AuthEntity
}
