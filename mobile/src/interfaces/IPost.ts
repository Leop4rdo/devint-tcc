import {IDevMinimal} from "./IDev";

export default interface IPostListItem {
    id : string
    content : string
    comments : number
    hearts : number
    attachments : string[]
    writter : IDevMinimal
    alreadyHearted : boolean
}
