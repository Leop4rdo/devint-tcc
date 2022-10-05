import IPostProps from "@src/core/domain/interfaces/IPost"
import ObjectMapper from "@src/utils/ObjectMapper";
import { Timestamp } from "typeorm";
import DevMinimalOutput from "../user/DevMinimalOutput";

export default class PostOutput {
    id: string
    content: string
    reports: JSON
    comments: JSON
    hearts: number
    attachments: JSON
    writter: DevMinimalOutput

    constructor(props: IPostProps) {
        this.id = props.id
        this.content = props.content
        this.reports = props.reports
        this.comments = props.comments
        this.hearts = JSON.parse(JSON.stringify(props.hearts)).length
        this.attachments = props.attachments
        this.writter = new DevMinimalOutput(props.writter)
    }
}
