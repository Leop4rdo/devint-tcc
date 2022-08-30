import { IsEmail, IsEmpty, validate } from "class-validator";
import BusinessLogicError from "../../../handler/BusinessLogicError ";
//import { IsRequired } from "../../../utils/decorators/FieldValidation.decorator";
import { IUserProps } from "../../interfaces/IUser";
import Errors from "../../../handler/errors.handler";

export default class LoginRequestDTO {
  
  @IsEmpty()	
  email: string;

  @IsEmpty()
  password: string;

  constructor(props: IUserProps) {
    this.email = props.email;
    this.password = props.password;

    validate(this).then(errors => {
      // errors is an array of validation errors
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
        throw new BusinessLogicError({
          errorMessage : `email errado`,
          errorCode : Errors.NULL_FIELD.code
        })
      }
    });
  }
}
