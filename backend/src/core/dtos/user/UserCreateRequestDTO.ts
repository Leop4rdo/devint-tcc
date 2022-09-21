import { Timestamp } from "typeorm";
import { IUserProps, userRoles } from "../../interfaces/IUser";
import {IsEmail, IsNotEmpty, IsString,IsEnum, validate} from "class-validator"
import errors from "../../../handler/errors.handler"
import ServerErrorResponse from "../../../Responses/ServerErrorResponse";
import DTO from "../DTO";
export default class UserCreateRequestDTO extends DTO{
  
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
  
  @IsEnum(userRoles)
  role: number;
  
  // Optional properties
  cnpj : string
  gender : string;
  birthday : Date | string;
  githubUsername : string;

  constructor(props: IUserProps) {
    super()
    this.email = props.email;
    this.name = props.name;
    this.password = props.password;
    this.role = props.role || userRoles.DEV;
    this.cnpj = props.cnpj
    this.gender = props.gender
    this.birthday = props.birthday
    this.githubUsername = props.githubUsername
  }

  
}
