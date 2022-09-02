import { IsDate, IsDateString, IsNotEmpty, IsString, validate } from "class-validator";
import AuthController from "../../../../controllers/AuthController";
import errors from "../../../../handler/errors.handler";
import ServerErrorResponse from "../../../../Responses/ServerErrorResponse";
import AuthEntity from "../../../entities/AuthEntity";
import IDevProps from "../../../interfaces/IDev";

export default class DevCreateRequestDTO {
    @IsString()
    name : string;

    
   
    @IsString()
    birthday : string | Date;
    @IsNotEmpty()
    auth : AuthEntity

    constructor(props : IDevProps) {
        this.name = props.name;
        this.birthday = props.birthday;
        this.auth = props.auth;
    }
    async validate() {
        const err = await validate(this);
    
        if (err.length > 0){ 
            console.log('validation failed. errors: ', err);
          return new ServerErrorResponse({
            hasError: true,
            errorCode : errors.BASE.code,
            errorMessage : errors.BASE.message
          })
        }
    
        return null
      }
}