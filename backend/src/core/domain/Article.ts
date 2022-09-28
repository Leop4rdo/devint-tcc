import { Timestamp } from "typeorm"
import DevEntity from "../../adapters/database/entities/DevEntity"
import IArticleProps from "../../interfaces/IArticle"

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