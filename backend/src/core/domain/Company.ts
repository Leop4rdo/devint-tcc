import { Timestamp } from "typeorm"
import AuthEntity from "../../adapters/database/entities/AuthEntity"
import ICompanyProps from "../../interfaces/ICompany"

export default class Company {
    id: string
    name : string
    cnpj : string
    auth : AuthEntity
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : ICompanyProps) {
        Object.assign(this, props)
    }
}