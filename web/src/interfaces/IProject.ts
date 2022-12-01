import IDevProps from "./IDev";
import { IPost } from "./IPost";

export default interface IProjectProps {
    id ?: string
    name : string
    bannerURI : string
    githubRepo: string
    openSource : boolean
    helpWanted : boolean
    desc : string
    posts : IPost[]
    members : IDevProps[]
    owner : string
    hearts : number
}
