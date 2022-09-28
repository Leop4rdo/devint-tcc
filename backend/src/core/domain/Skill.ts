import { Timestamp } from "typeorm"
import ISkillProps from "../../interfaces/ISkill"

export default class Skill {
    id: string
    name: string
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : ISkillProps) {
        Object.assign(this, props)
    }
}