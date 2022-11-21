import IProjectProps from "@src/core/domain/interfaces/IProject"
import InputPort from "../InputPort"

export default class ProjectCreateInput extends InputPort {
    name: string
    bannerURI : string
    githubRepository: JSON
    openSource: boolean
    members : {id : string}[]
    desc: string

    constructor(props : IProjectProps) {
        super()
        this.name = props.name
        this.bannerURI = props.bannerURI
        this.githubRepository = props.githubRepository
        this.members = this.members || []
        this.openSource = props.openSource
        this.desc = props.desc
    }
}
