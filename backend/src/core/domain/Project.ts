import { Timestamp } from "typeorm";
import IProjectProps from "@src/core/domain/interfaces/IProject";
import Post from "./Post";
import Dev from "./Dev";

export default class Project {
    id : string
    name : string
    bannerURI : string
    githubRepo: string
    license : String
    helpWanted : boolean
    desc : string
    posts : Post[]
    members : Dev[]
    owner : string
    hearts : JSON

    constructor(props : IProjectProps) {
        Object.assign(this, props)
    }
}
