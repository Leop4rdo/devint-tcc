import { Timestamp } from "typeorm";
import PostEntity from "@entities/PostEntity";
import IPostProps from "@src/core/domain/interfaces/IPost";
import Dev from "./Dev";
import Comment from "./Comment";

export default class Post {
    id: string
    content: string
    reports: JSON
    comments: Comment[]
    hearts : JSON
    attachments: JSON
    order : number
    writter: Dev
    createdAt : Timestamp
    updateAt : Timestamp

    constructor(props : IPostProps) {
        Object.assign(this, props)
    }
}
