import IPostProps from "@src/core/domain/interfaces/IPost"
import ObjectMapper from "@src/utils/ObjectMapper";
import { Timestamp } from "typeorm";
import DevMinimalOutput from "../user/DevMinimalOutput";

export default class PostOutput {
    id: string
    content: string
    reports: JSON
    comments: JSON
    hearts: JSON
    writter: DevMinimalOutput
    createdAt: Timestamp
    updatedAt: Timestamp

    constructor(props: IPostProps) {
        ObjectMapper(this, props)

        this.writter = new DevMinimalOutput(props.writter)
    }
}
