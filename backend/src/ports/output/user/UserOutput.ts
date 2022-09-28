import { Timestamp } from "typeorm"
import { IUserProps } from "../../../interfaces/IUser"

export default class UserOutput {
    id : string
    name : string
    following : JSON
    followers : JSON
    role : number
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IUserProps) {
        Object.assign(this, props)
    }
}