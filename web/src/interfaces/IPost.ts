export default interface IPostListItem {
    id : string
    content : string
    reports : any[]
    comments : number
    hearts : number
    attachments : string[]
    writter : IWritter
}

export default interface IPost {
    id : string
    content : string
    reports : any[]
    hearts : number
    attachments : string[]
    writter : IWritter
}


interface IWritter {
    id : string
    name : string
    profilePicUrl : string
    githubUsername ?: string
}