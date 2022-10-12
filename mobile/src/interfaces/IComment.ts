import { IDevMinimal } from "./IDev"
import IPostProps from "./IPost"

export default interface IComment {
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