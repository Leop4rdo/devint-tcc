import { Timestamp } from "typeorm"
import IAuthProps from "@src/interfaces/IAuth"

export default class Auth {
    id : string
    email : string
    password : string
    role : number
    enabled : boolean
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IAuthProps) {
        Object.assign(this, props)
    }
}