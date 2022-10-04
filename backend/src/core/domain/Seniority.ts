import { Timestamp } from "typeorm"
import ISeniorityProps from "@src/core/domain/interfaces/ISeniority"
import Dev from "./Dev"

export default class Seniority {
    id: string
    name: string
    devs: Dev[]
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : ISeniorityProps) {
        Object.assign(this, props)
    }
}