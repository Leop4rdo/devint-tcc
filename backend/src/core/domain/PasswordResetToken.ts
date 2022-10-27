import { Timestamp } from "typeorm"
import AuthEntity from "@entities/AuthEntity"
import { IPasswordResetToken } from "@src/core/domain/interfaces/IPasswordResetToken"
import Auth from "./Auth"

export default class PasswordResetToken {
    id : string
    token : string
    expirationDate : number
    owner : Auth
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IPasswordResetToken) {
        Object.assign(this, props)
    }
}