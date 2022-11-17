import IProjectProps from "@src/core/domain/interfaces/IProject"
import { Timestamp } from "typeorm"
import DevMinimalOutput from "../user/DevMinimalOutput"
import DevOutput from "../user/DevOutput"

export default class ProjectOutput {
    id : string
    bannerURI : string
    name: string
    desc: string
    githubRepository: JSON
    members : DevMinimalOutput[]
    owner : string
    openSource: boolean
    hearts: JSON

    constructor(props : IProjectProps) {
        this.id = props.id
        this.name = props.name
        this.bannerURI = props.bannerURI
        this.githubRepository = props.githubRepository
        this.openSource = props.openSource
        this.desc = props.desc
        this.hearts = JSON.parse(JSON.stringify(props.hearts)).length
        this.owner = props.owner
        this.members = props.members.map((dev) => new DevMinimalOutput(dev))
    }
}