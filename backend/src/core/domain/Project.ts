import { Timestamp } from "typeorm";
import IProjectProps from "@src/core/domain/interfaces/IProject";
import Post from "./Post";
import Dev from "./Dev";

export default class Project {
    id : string
    name : string
    desc : string
    bannerURI : string
    githubRepository: JSON
    openSource : boolean
    posts : Post[]
    members : Dev[]
    owner : string
    hearts : JSON

    constructor(props : IProjectProps) {
        Object.assign(this, props)
    }
}
