import IProjectProps from "@src/core/domain/interfaces/IProject"
import { Timestamp } from "typeorm"
import DevMinimalOutput from "../user/DevMinimalOutput"
import DevOutput from "../user/DevOutput"

export default class ProjectOutput {
    id : string
    name: string
    bannerURI : string
    githubRepo: string
    license: String
    members : DevMinimalOutput[]
    owner : string
    helpWanted: boolean
    desc: string
    hearts: JSON

    constructor(props : IProjectProps) {
        this.id = props.id
        this.name = props.name
        this.bannerURI = props.bannerURI
        this.githubRepo = props.githubRepo
        this.license = props.license
        this.helpWanted = props.helpWanted
        this.desc = props.desc
        this.hearts = JSON.parse(JSON.stringify(props.hearts)).length
        this.owner = props.owner
        this.members = props.members.map((dev) => new DevMinimalOutput(dev))
    }
}