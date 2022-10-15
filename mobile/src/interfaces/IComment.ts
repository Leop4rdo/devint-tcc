import { IDevMinimal } from "./IDev"
import IPostProps from "./IPost"

export default interface IComment {
    alreadyHearted: boolean
    id : string
    writter : IDevMinimal
    post : IPostProps
    hearts : number
    answers : {
        content : string,
        writter : IDevMinimal
    }[]
    content : string
}