import AuthEntity from "../entities/AuthEntity"

export default interface ICompanyProps {
    id : string
    name : string
    bio : string
    following : JSON
    followers : JSON
    cnpj : string
    auth : AuthEntity
}