import ObjectMapper from "@src/utils/ObjectMapper"
import Dev from "./Dev"
import ICommentProps from "./interfaces/IComment"
import Post from "./Post"

export default class Comment {
    id : string
    writter : Dev
    post : Post
    hearts : JSON
    answers : JSON
    content : string

    constructor(props : ICommentProps) {
        Object.assign(this, props)
    }
}