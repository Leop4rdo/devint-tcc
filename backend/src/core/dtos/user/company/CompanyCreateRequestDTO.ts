import AuthEntity from "../../../entities/AuthEntity"
import ICompanyProps from "../../../interfaces/ICompany"

export default class CompanyCreateRequestDTO {
    name : string
    cnpj : string
    auth : AuthEntity

    constructor(props : ICompanyProps) {
        this.name = props.name
        this.cnpj = props.cnpj
        this.auth = props.auth
    }
}