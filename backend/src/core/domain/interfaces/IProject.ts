import IPostProps from "./IPost";

export default interface IProjectProps {
    id ?: string
    name : string
    githubRepo: JSON
    followers : JSON
    license : String
    helpWanted : boolean
    desc : string
    posts : IPostProps[]
    hearts : JSON
}
