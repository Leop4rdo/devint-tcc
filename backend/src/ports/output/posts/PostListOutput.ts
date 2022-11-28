import Comment from "@src/core/domain/Comment";
import IDevProps from "@src/core/domain/interfaces/IDev";
import IPostProps from "@src/core/domain/interfaces/IPost"
import { Timestamp } from "typeorm";
import ProjectMinimalOutput from "../projects/ProjectMinimalOutput";
import ProjectOutput from "../projects/ProjectOutput";
import DevMinimalOutput from "../user/DevMinimalOutput";

export default class PostListOutput {
    id: string
    content: string
    comments: number
    hearts: number
    attachments: JSON
    alreadyHearted: boolean
    writter: DevMinimalOutput
    createdAt: Timestamp
    updatedAt: Timestamp
    project ?: ProjectMinimalOutput

    constructor(props: IPostProps, userId) {
        this.id = props.id
        this.content = props.content
        this.project = (props.project) ? new ProjectMinimalOutput(props.project) : undefined
        this.comments = this.getCommentAmount(props.comments)
        this.hearts = JSON.parse(JSON.stringify(props.hearts)).length
        this.attachments = props.attachments
        this.writter = new DevMinimalOutput(props.writter as IDevProps)
        this.createdAt = props.createdAt
        this.updatedAt = props.updatedAt
        this.alreadyHearted = JSON.parse(JSON.stringify(props.hearts)).includes(userId)
    }

    private getCommentAmount(comments) {
        let total = 0

        comments.forEach((comment : Comment) => {
            total += JSON.parse(JSON.stringify(comment.answers)).length + 1
        })

        return total
    }
}
