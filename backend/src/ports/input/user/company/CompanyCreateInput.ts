import { IsString, IsNotEmpty } from "class-validator"
import AuthEntity from "../../../../adapters/database/entities/AuthEntity"
import ICompanyProps from "../../../../interfaces/ICompany"
import InputPort from "../../InputPort"

export default class CompanyCreateInput extends InputPort {
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
        Object.assign(this, props)
    }
}