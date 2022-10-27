import { Timestamp } from "typeorm"
import ICompanyProps from "@src/core/domain/interfaces/ICompany"
import Auth from "./Auth"

export default class Company {
    id: string
    name : string
    cnpj : string
    auth : Auth
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : ICompanyProps) {
        Object.assign(this, props)
    }
}