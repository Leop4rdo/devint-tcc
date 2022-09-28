import { Timestamp } from "typeorm"
import AuthEntity from "../../adapters/database/entities/AuthEntity"
import { IPasswordResetToken } from "../../interfaces/IPasswordResetToken"

export default class PasswordResetToken {
    id : string
    token : string
    expirationDate : number
    owner : AuthEntity
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IPasswordResetToken) {
        Object.assign(this, props)
    }
}