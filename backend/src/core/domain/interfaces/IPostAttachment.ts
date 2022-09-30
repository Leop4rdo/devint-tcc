import PostEntity from "../../../adapters/database/entities/PostEntity"
import IPostProps from "./IPost"

export default interface IPostAttachmentProps{
    id:string
    url: string
    post: IPostProps
}