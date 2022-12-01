import IProjectProps from "@src/core/domain/interfaces/IProject"
import { Timestamp } from "typeorm"
import DevMinimalOutput from "../user/DevMinimalOutput"
import DevOutput from "../user/DevOutput"

export default class ProjectMinimalOutput {
    id : string
    bannerURI : string
    name: string
    desc: string
    openSource : boolean
    githubRepository: JSON

    constructor(props : IProjectProps, userId ?: string) {
        console.log(props)
        this.id = props.id
        this.name = props.name
        this.bannerURI = props.bannerURI
        this.githubRepository = props.githubRepository
        this.openSource = props.openSource
        this.desc = props.desc
    }
}