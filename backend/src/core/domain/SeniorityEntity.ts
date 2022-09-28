import { Timestamp } from "typeorm"
import DevEntity from "../../adapters/database/entities/DevEntity"
import ISeniorityProps from "../../interfaces/ISeniority"

export default class Seniority {
    id: string
    names: string
    devs: DevEntity[]
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : ISeniorityProps) {
        Object.assign(this, props)
    }
}