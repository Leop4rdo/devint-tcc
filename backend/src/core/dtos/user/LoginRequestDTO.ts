import { IsEmail, IsEmpty, validate } from "class-validator";
import BusinessLogicError from "../../../handler/BusinessLogicError ";
//import { IsRequired } from "../../../utils/decorators/FieldValidation.decorator";
import { IUserProps } from "../../interfaces/IUser";
import ServerErrorResponse from "../../../Responses/ServerErrorResponse";
import errors from "../../../handler/errors.handler";

export default class LoginRequestDTO {
  
  @IsEmail()	
  email: string;

  
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
