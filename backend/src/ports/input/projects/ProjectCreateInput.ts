import IProjectProps from "@src/core/domain/interfaces/IProject"
import InputPort from "../InputPort"

export default class ProjectInput extends InputPort {
    id : string
    name: string
    bannerURI : string
    githubRepo: JSON
    license: String
    helpWanted: boolean
    desc: string
    hearts: JSON

    constructor(props : IProjectProps) {
        super()
        this.id = props.id
        this.name = props.name
        this.bannerURI = props.bannerURI
        this.githubRepo = props.githubRepo
        this.license = props.license
        this.helpWanted = props.helpWanted
        this.desc = props.desc
        this.hearts = props.hearts
    }
}