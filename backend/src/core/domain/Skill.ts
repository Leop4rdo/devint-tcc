import { Timestamp } from "typeorm"
import ISkillProps from "@src/core/domain/interfaces/ISkill"

export default class Skill {
    id: string
    name: string
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : ISkillProps) {
        Object.assign(this, props)
    }
}