export default interface IPost {
    id : string
    content : string
    reports : any[]
    comments : {
        content : string,
        writter : IWritter
    }[]
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