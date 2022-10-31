import IDevProps from "@src/core/domain/interfaces/IDev"

export default class DevMinimalOutput {
    id : string
    name : string
    profilePicUrl : string
    githubUsername : string
    following ?: boolean
    
    constructor(props : IDevProps) {
        this.id = props.id
        this.name = props.name
        this.profilePicUrl = props.profilePicUrl
        this.githubUsername = props.githubUsername
    }
}
