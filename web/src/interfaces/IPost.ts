import IComment from "./IComment"
import IDevMinimal from "./IDev"

export interface IPost {
    id : string
    content : string
    reports : any[]
    comments : IComment[]
    hearts : number
    attachments : string[]
    writter : IDevMinimal
    alreadyHearted : boolean
}

// interface IWritter {
//     id : string
//     name : string
//     profilePicUrl : string
//     githubUsername ?: string
// }
export interface IPostListItem {
    id : string
    content : string
    comments : number
    hearts : number
    attachments : string[]
    writter : IDevMinimal
    alreadyHearted : boolean
}