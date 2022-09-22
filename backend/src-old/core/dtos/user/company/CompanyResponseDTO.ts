import ICompanyProps from "../../../interfaces/ICompany"

export class CompanyResponseDTO {
    id : string
    name : string
    cnpj : string
    bio : string
    following : JSON
    followers : JSON

    constructor(props : ICompanyProps) {
        this.id = props.id
        this.name = props.name
        this.cnpj = props.cnpj
        this.bio = props.bio
        this.following = props.following
        this.followers = props.followers
    } 
}