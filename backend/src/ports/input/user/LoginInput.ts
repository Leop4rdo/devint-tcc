import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IUserProps } from "../../../core/domain/interfaces/IUser";
import InputPort from "../InputPort";

export default class LoginInput extends InputPort {
  
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