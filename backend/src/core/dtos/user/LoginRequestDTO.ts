import { IsRequired } from "../../../utils/decorators/FieldValidation.decorator";
import { IUserProps } from "../../interfaces/IUser";

export default class LoginRequestDTO {
  @IsRequired()
  email: string;

  @IsRequired()
  password: string;

  constructor(props: IUserProps) {
    this.email = props.email;
    this.password = props.password;
  }
}
