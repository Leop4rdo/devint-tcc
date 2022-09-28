import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IUserProps } from "../../../interfaces/IUser";
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