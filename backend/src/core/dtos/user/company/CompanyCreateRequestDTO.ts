import { IsNotEmpty, IsString, Matches, validate } from "class-validator"
import errors from "../../../../handler/errors.handler"
import ServerErrorResponse from "../../../../Responses/ServerErrorResponse"
import AuthEntity from "../../../entities/AuthEntity"
import ICompanyProps from "../../../interfaces/ICompany"
import DTO from "../../DTO"

export default class CompanyCreateRequestDTO extends DTO {
    @IsString()
    @IsNotEmpty()
    name : string

    @IsString()
    @IsNotEmpty()
    cnpj : string

    @IsNotEmpty()
    auth : AuthEntity

    constructor(props : ICompanyProps) {
        super()
        this.name = props.name
        this.cnpj = props.cnpj
        this.auth = props.auth
    }
}