import { Timestamp } from "typeorm";
import { IUserProps, userRoles } from "../../interfaces/IUser";
import {IsEmail, IsNotEmpty, IsString,IsEnum, validate} from "class-validator"
import errors from "../../../handler/errors.handler"
import ServerErrorResponse from "../../../Responses/ServerErrorResponse";
export default class UserCreateRequestDTO {
  
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  // Optional properties
  cnpj : string
  gender : string;
  birthday : Date | string;

  @IsEnum(userRoles)
  role: number;


  constructor(props: IUserProps) {
    this.email = props.email;
    this.name = props.name;
    this.password = props.password;
    this.role = props.role || userRoles.DEV;
    this.cnpj = props.cnpj
    this.gender = props.gender
    this.birthday = props.birthday
  }

  async validate() {
    const err = await validate(this);

    if (err.length > 0){ 
      return new ServerErrorResponse({
        hasError: true,
        errorCode : errors.BASE.code,
        errorMessage : errors.BASE.message
      })
    }

    return null
  }
}
