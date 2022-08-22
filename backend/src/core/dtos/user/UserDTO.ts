import { Timestamp } from "typeorm"
import { IUserProps, userRoles } from "../../interfaces/IUser"

export default class UserDTO {
    id : string
    name : string
    email : string
    password : string
    enabled : boolean
    role : number
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IUserProps) {
        this.id = props.id
        this.email = props.email
        this.name = props.name
        this.password = props.password
        this.enabled = props.enabled
        this.role = props.role || userRoles.DEV
    }
}