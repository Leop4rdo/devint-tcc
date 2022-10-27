import { StringifyOptions } from "querystring"
import { Timestamp } from "typeorm"
import IAuthProps from "@src/core/domain/interfaces/IAuth"

export default class Auth {
    id : string
    email : string
    emailConfirmed : boolean
    password : string
    role : number
    enabled : boolean
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IAuthProps) {
        Object.assign(this, props)
    }
}