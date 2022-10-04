import { Timestamp } from "typeorm"
import IBadgeProps from "@src/core/domain/interfaces/IBadge"

export default class Badge {
    id: string
    name: string
    desc: string
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IBadgeProps) {
        Object.assign(this, props)
    }
} 