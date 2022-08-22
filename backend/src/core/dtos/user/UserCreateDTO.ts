import { Timestamp } from "typeorm"
import { IsInEnum, IsRequired } from "../../../utils/decorators/FieldValidation.decorator"
import { IUserProps, userRoles } from "../../interfaces/IUser"

export default class UserCreateDTO {
    @IsRequired()
    name : string

    @IsRequired()
    email : string

    @IsRequired()
    password : string

    @IsInEnum(userRoles)
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