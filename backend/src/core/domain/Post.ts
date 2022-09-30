import { Timestamp } from "typeorm";
import PostEntity from "@entities/PostEntity";
import IPostProps from "@src/core/domain/interfaces/IPost";
import Dev from "./Dev";
import PostAttachment from "./PostAttachment";

export default class Post {
    id: string
    content: string
    reports: JSON
    comments: JSON
    hearts : JSON
    postAttachment: PostAttachment[]
    writter: Dev
    createdAt : Timestamp
    updateAt : Timestamp

    constructor(props : IPostProps) {
        Object.assign(this, props)
    }
}