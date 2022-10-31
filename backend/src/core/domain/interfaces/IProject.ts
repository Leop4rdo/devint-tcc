import IDevProps from "./IDev";
import IPostProps from "./IPost";

export default interface IProjectProps {
    id ?: string
    name : string
    bannerURI : string
    githubRepo: string
    license : String
    helpWanted : boolean
    desc : string
    posts : IPostProps[]
    members : IDevProps[]
    owner : string
    hearts : JSON
}
