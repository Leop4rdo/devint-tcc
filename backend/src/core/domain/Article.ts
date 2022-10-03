import { Timestamp } from "typeorm"
import IArticleProps from "@src/core/domain/interfaces/IArticle"
import Dev from "./Dev"

export default class Article {
    id: string
    title: string
    content: string
    upVotes: JSON 
    downVotes: JSON
    comments: JSON
    writter : Dev
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IArticleProps) {
        Object.assign(this, props)
    }
}
