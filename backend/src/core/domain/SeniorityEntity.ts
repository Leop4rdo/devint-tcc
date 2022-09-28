import { Timestamp } from "typeorm"
import DevEntity from "@entities/DevEntity"
import ISeniorityProps from "@src/interfaces/ISeniority"

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