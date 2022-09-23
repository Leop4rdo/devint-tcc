import { Timestamp } from "typeorm"
import { IUserProps, userRoles } from "../../interfaces/IUser"
import DTO from "../DTO"

export default class UserDTO extends DTO{
    id : string
    name : string
    following : JSON
    followers : JSON
    role : number
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IUserProps) {
        super()
        this.id = props.id
        this.name = props.name
        this.following = props.following
        this.followers = props.followers
        this.role = props.role || userRoles.DEV
    }
}