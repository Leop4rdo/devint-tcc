import { Timestamp } from "typeorm"
import { IUserProps, userRoles } from "../../interfaces/IUser"

export default class UserDTO {
    name : string
    email : string
    password : string
    role : number
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IUserProps) {
        this.email = props.email
        this.name = props.name
        this.password = props.password
        this.role = props.role || userRoles.DEV
    }
}