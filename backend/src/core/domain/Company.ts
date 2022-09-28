import { Timestamp } from "typeorm"
import AuthEntity from "@entities/AuthEntity"
import ICompanyProps from "@src/interfaces/ICompany"

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