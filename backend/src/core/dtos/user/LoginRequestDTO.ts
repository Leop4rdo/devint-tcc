import { IsEmail, IsEmpty, IsNotEmpty, IsString, validate } from "class-validator";
import BusinessLogicError from "../../../handler/BusinessLogicError ";
import { IUserProps } from "../../interfaces/IUser";
import ServerErrorResponse from "../../../Responses/ServerErrorResponse";
import errors from "../../../handler/errors.handler";

export default class LoginRequestDTO {
  
  @IsEmail()	
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  constructor(props: IUserProps) {
    this.email = props.email;
    this.password = props.password;
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
