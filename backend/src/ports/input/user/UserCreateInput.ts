import { IsString, IsNotEmpty, IsEmail, IsEnum } from "class-validator";
import { IUserProps, userRoles } from "../../../core/domain/interfaces/IUser";
import InputPort from "../InputPort"

export default class UserCreateInput extends InputPort {
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
    
    role: number;
    
    // Optional properties
    cnpj : string
    gender : string;
    birthday : Date | string;
    githubUsername : string;

    constructor(props : IUserProps) {
        super()
        Object.assign(this, props);
    }
}