import {Timestamp} from "typeorm";

export interface IPasswordResetToken {
    id : string
    token : string
    expirationDate : Timestamp
}
