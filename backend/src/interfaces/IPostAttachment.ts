import PostEntity from "../adapters/database/entities/PostEntity"

export default interface IPostAttachmentProps{
    
    id:string
    url: string
    post: PostEntity
}