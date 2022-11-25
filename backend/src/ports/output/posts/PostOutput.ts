import Comment from "@src/core/domain/Comment";
import ICommentProps from "@src/core/domain/interfaces/IComment";
import IPostProps from "@src/core/domain/interfaces/IPost"
import { Timestamp } from "typeorm";
import DevMinimalOutput from "../user/DevMinimalOutput";
import CommentOutput from "./CommentOutput";

export default class PostOutput {
    id: string
    content: string
    comments: CommentOutput[]
    commentAmount: number
    reports: JSON
    hearts: number
    attachments: JSON
    writter: DevMinimalOutput
    createdAt: Timestamp
    updatedAt: Timestamp

    constructor(props: IPostProps, devId) {
        this.id = props.id
        this.content = props.content
        this.commentAmount = this.getCommentAmount(props.comments)
        this.comments = props.comments.map((comment : ICommentProps) => new CommentOutput(comment, devId))
        this.hearts = JSON.parse(JSON.stringify(props.hearts)).length
        this.reports = props.reports
        this.attachments = props.attachments
        this.createdAt = props.createdAt
        this.updatedAt = props.updatedAt
        this.writter = new DevMinimalOutput(props.writter)
    }

    private getCommentAmount(comments) {
        let total = 0

        comments.forEach((comment : Comment) => {
            total += JSON.parse(JSON.stringify(comment.answers)).length + 1
        })

        return total
    }
}
