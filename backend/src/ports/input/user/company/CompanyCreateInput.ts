import Auth from "@src/core/domain/Auth"
import { IsString, IsNotEmpty } from "class-validator"
import AuthEntity from "../../../../adapters/database/entities/AuthEntity"
import ICompanyProps from "../../../../core/domain/interfaces/ICompany"
import InputPort from "../../InputPort"

export default class CompanyCreateInput extends InputPort {
    @IsString()
    @IsNotEmpty()
    name : string

    @IsString()
    @IsNotEmpty()
    cnpj : string

    @IsNotEmpty()
    auth : Auth

    constructor(props : ICompanyProps) {
        super()
        Object.assign(this, props)
    }
}