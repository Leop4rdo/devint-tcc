import { IsNotEmpty, IsString, Matches, validate } from "class-validator"
import errors from "../../../../handler/errors.handler"
import ServerErrorResponse from "../../../../Responses/ServerErrorResponse"
import AuthEntity from "../../../entities/AuthEntity"
import ICompanyProps from "../../../interfaces/ICompany"

export default class CompanyCreateRequestDTO {
    @IsString()
    @IsNotEmpty()
    name : string

    @IsString()
    @IsNotEmpty()
    // todo : add cnpj regex
    @Matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, {
        message:
          `CNPJ format is not valid, please don't smash your keyboard `,
      })
  
    cnpj : string

    @IsNotEmpty()
    auth : AuthEntity

    constructor(props : ICompanyProps) {
        this.name = props.name
        this.cnpj = props.cnpj
        this.auth = props.auth
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