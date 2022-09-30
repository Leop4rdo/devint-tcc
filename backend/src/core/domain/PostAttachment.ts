import { Timestamp } from "typeorm"
import IPostAttachmentProps from "./interfaces/IPostAttachment"
import Post from "./Post"

export default class PostAttachment {
    id: string
    uri: string
    post: Post
    createdAt : Timestamp
    updateAt : Timestamp

    constructor(props : IPostAttachmentProps) {
        Object.assign(this, props);
    }
}