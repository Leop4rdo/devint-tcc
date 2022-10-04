import ICompanyProps from "../../../core/domain/interfaces/ICompany";

export default class CompanyOutput {
    id : string
    name : string
    cnpj : string
    bio : string
    following : JSON
    followers : JSON

    constructor(props : ICompanyProps) {
        Object.assign(this, props);
    }
}