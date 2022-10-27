import ICommentProps from "@src/core/domain/interfaces/IComment"
import DevMinimalOutput from "../user/DevMinimalOutput"

export default class CommentOutput {
    id : string
    content : string
    hearts : number
    answers : JSON
    writter : DevMinimalOutput
    alreadyHearted : boolean

    constructor(props : ICommentProps, devId) {
        this.id = props.id
        this.content = props.content
        this.hearts = JSON.parse(JSON.stringify(props.hearts)).length
        this.writter = new DevMinimalOutput(props.writter)
        this.answers = props.answers
        this.alreadyHearted = JSON.parse(JSON.stringify(props.hearts)).includes(devId)
    }
}