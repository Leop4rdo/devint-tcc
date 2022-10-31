import IPostProps from "./IPost";

export default interface IProjectProps {
    id ?: string
    name : string
    bannerURI : string
    githubRepo: JSON
    license : String
    helpWanted : boolean
    desc : string
    posts : IPostProps[]
    hearts : JSON
}
