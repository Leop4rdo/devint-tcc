import { Timestamp } from "typeorm";
import {
  IsInEnum,
  IsRequired,
} from "../../../utils/decorators/FieldValidation.decorator";
import { IUserProps, userRoles } from "../../interfaces/IUser";

export default class UserCreateRequestDTO {
  @IsRequired()
  name: string;

  @IsRequired()
  email: string;

  @IsRequired()
  password: string;

  // Optional properties
  cnpj : string
  gender : string;
  birthday : Date | string;

  @IsInEnum(userRoles)
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
}
