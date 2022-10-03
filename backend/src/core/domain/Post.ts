import { Timestamp } from "typeorm";
import PostEntity from "@entities/PostEntity";
import IPostProps from "@src/core/domain/interfaces/IPost";
import Dev from "./Dev";

export default class Post {
    id: string
    content: string
    reports: JSON
    comments: JSON
    hearts : JSON
    attachments: JSON
    writter: Dev
    createdAt : Timestamp
    updateAt : Timestamp

    constructor(props : IPostProps) {
        Object.assign(this, props)
    }
}
