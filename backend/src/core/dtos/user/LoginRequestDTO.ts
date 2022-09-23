import { IsEmail, IsEmpty, IsNotEmpty, IsString, validate } from "class-validator";
import BusinessLogicError from "../../../handler/BusinessLogicError ";
import { IUserProps } from "../../interfaces/IUser";
import ServerErrorResponse from "../../../Responses/ServerErrorResponse";
import errors from "../../../handler/errors.handler";
import DTO from "../DTO";

export default class LoginRequestDTO extends DTO {
  
  @IsEmail()	
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  constructor(props: IUserProps) {
    super()
    this.email = props.email;
    this.password = props.password;
  }
}
