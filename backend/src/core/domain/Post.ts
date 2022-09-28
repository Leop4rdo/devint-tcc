import { Timestamp } from "typeorm";
import PostEntity from "@entities/PostEntity";
import IPostProps from "@src/interfaces/IPost";

export default class Post {
    id: string
    url: string
    post: PostEntity
    createdAt : Timestamp
    updateAt : Timestamp

    constructor(props : IPostProps) {
        Object.assign(this, props)
    }
}