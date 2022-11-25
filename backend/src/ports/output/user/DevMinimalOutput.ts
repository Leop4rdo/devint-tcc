import IDevProps from "@src/core/domain/interfaces/IDev"
import { Timestamp } from "typeorm"

export default class DevMinimalOutput {
    id : string
    name : string
    profilePicUrl : string
    githubUsername : string
    following ?: boolean
    createdAt : Timestamp
    updatedAt : Timestamp
    
    constructor(props : IDevProps) {
        this.id = props.id
        this.name = props.name
        this.profilePicUrl = props.profilePicUrl
        this.createdAt = props.createdAt
        this.updatedAt = props.updatedAt
        this.githubUsername = props.githubUsername
    }
}
