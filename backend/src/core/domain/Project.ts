import { Timestamp } from "typeorm";
import IProjectProps from "@src/core/domain/interfaces/IProject";
import Post from "./Post";

export default class Project {
    id : string
    name: string
    githubRepo: JSON
    followers: JSON
    license: String
    helpWanted: boolean
    desc: string
    posts : Post[]
    hearts: JSON
    createdAt : Timestamp
    updatedAt : Timestamp
    
    constructor(props : IProjectProps) {
        Object.assign(this, props)
    }
}
