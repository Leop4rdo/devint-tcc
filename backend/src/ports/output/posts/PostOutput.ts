import Comment from "@src/core/domain/Comment";
import IPostProps from "@src/core/domain/interfaces/IPost"
import DevMinimalOutput from "../user/DevMinimalOutput";
import CommentOutput from "./CommentOutput";

export default class PostOutput {
    id: string
    content: string
    comments: CommentOutput[]
    reports: JSON
    hearts: number
    attachments: JSON
    writter: DevMinimalOutput

    constructor(props: IPostProps, devId) {
        this.id = props.id
        this.content = props.content
        this.comments = props.comments.map((comment : Comment) => new CommentOutput(comment, devId))
        this.hearts = JSON.parse(JSON.stringify(props.hearts)).length
        this.reports = props.reports
        this.attachments = props.attachments
        this.writter = new DevMinimalOutput(props.writter)
    }
}
