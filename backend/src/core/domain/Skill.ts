import { Timestamp } from "typeorm"
import ISkillProps from "@src/core/domain/interfaces/ISkill"

export default class Skill {
    id: string
    name: string
    icon : string
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : ISkillProps) {
        Object.assign(this, props)
    }
}