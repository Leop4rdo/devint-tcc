import IDevMinimal from "./IDev";
import IDevProps from "./IDev";
import { GithubRepository } from "./IGithubRepository";
import { IPost } from "./IPost";

export default interface IProject {
    id ?: string
    bannerURI : string
    name: string
    desc: string
    githubRepository?: GithubRepository
    members : IDevMinimal[]
    owner ?: string
    openSource: boolean
    hearts?: JSON
    alreadyHearted ?: boolean
}
