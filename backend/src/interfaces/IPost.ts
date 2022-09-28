import PostAttachmentEntity from "../adapters/database/entities/PostAttachmentEntity"
import IDevProps from "./IDev"


export default interface IPostProps {
  id : string
  content : string
  reports : JSON
  comments : JSON
  upVotes : JSON
  downVotes : JSON
  postAttachment : PostAttachmentEntity[]
  writter : IDevProps 
  names : string
}