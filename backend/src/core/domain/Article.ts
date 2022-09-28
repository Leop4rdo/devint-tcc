import { Timestamp } from "typeorm"
import DevEntity from "@entities/DevEntity"
import IArticleProps from "@src/interfaces/IArticle"

export default class Article {
    id: string
    title: string
    content: string
    upVotes: JSON 
    downVotes: JSON
    comments: JSON
    writter : DevEntity
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IArticleProps) {
        Object.assign(this, props)
    }
}