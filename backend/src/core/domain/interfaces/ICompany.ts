import AuthEntity from "../../../adapters/database/entities/AuthEntity"
import IAuthProps from "./IAuth"

export default interface ICompanyProps {
    id : string
    name : string
    cnpj : string
    auth : IAuthProps
}