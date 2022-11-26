import { Timestamp } from "typeorm"
import IDevProps from "./IDev"
import IPostProps from "./IPost"

export default interface ICommentProps {
    id : string
    writter : IDevProps
    post : IPostProps
    hearts : JSON
    answers : JSON
    content : string
    createdAt : Timestamp
    updatedAt : Timestamp
}