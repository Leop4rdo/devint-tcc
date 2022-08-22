import { Timestamp } from "typeorm"
import { IsInEnum, IsRequired } from "../../../utils/decorators/FieldValidation.decorator"
import { IUserProps, userRoles } from "../../interfaces/IUser"

export default class UserResponseDTO {
    id : string
    name : string
    email : string
    enabled : boolean
    role : number

    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IUserProps) {
        this.id = props.id
        this.email = props.email
        this.name = props.name
        this.enabled = props.enabled
        this.role = props.role
    }
}