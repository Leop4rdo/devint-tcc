import IDevProps from "@src/core/domain/interfaces/IDev";
import IPostProps from "@src/core/domain/interfaces/IPost"
import DevMinimalOutput from "../user/DevMinimalOutput";

export default class PostListOutput {
    id: string
    content: string
    comments: number
    hearts: number
    attachments: JSON
    alreadyHearted : boolean
    writter: DevMinimalOutput

    constructor(props: IPostProps, userId) {
        this.id = props.id
        this.content = props.content
        this.comments = props.comments.length
        this.hearts = JSON.parse(JSON.stringify(props.hearts)).length
        this.attachments = props.attachments
        this.writter = new DevMinimalOutput(props.writter as IDevProps)

        this.alreadyHearted = JSON.parse(JSON.stringify(props.hearts)).includes(userId)
    }
}
