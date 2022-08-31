import { Timestamp } from "typeorm"
import { IUserProps, userRoles } from "../../interfaces/IUser"

export default class UserDTO {
    id : string
    name : string
    following : JSON
    followers : JSON
    role : number
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IUserProps) {
        this.id = props.id
        this.name = props.name
        this.following = props.following
        this.followers = props.followers
        this.role = props.role || userRoles.DEV
    }
}