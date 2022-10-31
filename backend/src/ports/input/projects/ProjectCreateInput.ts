import IProjectProps from "@src/core/domain/interfaces/IProject"
import InputPort from "../InputPort"

export default class ProjectCreateInput extends InputPort {
    name: string
    bannerURI : string
    githubRepo: string
    license: String
    helpWanted: boolean
    members : {id : string}[]
    desc: string

    constructor(props : IProjectProps) {
        super()
        this.name = props.name
        this.bannerURI = props.bannerURI
        this.githubRepo = props.githubRepo
        this.license = props.license
        this.members = this.members || []
        this.helpWanted = props.helpWanted
        this.desc = props.desc
    }
}
