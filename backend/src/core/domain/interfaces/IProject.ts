import IDevProps from "./IDev";
import IPostProps from "./IPost";

export default interface IProjectProps {
    id ?: string
    name : string
    desc : string
    bannerURI : string
    githubRepository: JSON
    openSource : boolean
    posts : IPostProps[]
    members : IDevProps[]
    owner : string
    hearts : JSON
}
