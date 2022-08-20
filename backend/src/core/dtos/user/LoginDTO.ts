import { IUserProps } from "../../interfaces/IUser"

export default class LoginDTO {
    email : string
    password : string

    constructor(props : IUserProps) {
        this.email = props.email
        this.password = props.password
    }
}