import AuthEntity from "../entities/AuthEntity"

export default interface ICompanyProps {
    id : string
    name : string
    cnpj : string
    bio ?: string
    following ?: JSON
    followers ?: JSON
    auth : AuthEntity
}