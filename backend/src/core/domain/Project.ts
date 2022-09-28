import { Timestamp } from "typeorm";
import IProjectProps from "../../interfaces/IProject";

export default class Project {
    id : string
    name: string
    githubRepoUrl: string
    followers: JSON
    license: String
    acceptDonations: boolean
    helpWanted: boolean
    desc: string
    upVotes: JSON
    downVotes: JSON
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IProjectProps) {
        Object.assign(this, props)
    }
}