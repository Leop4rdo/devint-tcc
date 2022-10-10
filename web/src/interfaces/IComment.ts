export default interface IComment {
    id: string
    content: string
    writter: IWritter
}


interface IWritter {
    id : string
    name : string
    profilePicUrl : string
    githubUsername ?: string
}