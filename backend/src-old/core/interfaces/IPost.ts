import DevEntity from "../entities/DevEntity"
import PostAttachmentEntity from "../entities/PostAttachmentEntity"

export default interface IPostProps {
  id : string
  content : string
  reports : JSON
  comments : JSON
  upVotes : JSON
  downVotes : JSON
  postAttachment : PostAttachmentEntity[]
  writter : DevEntity 
  names : string
  devs : DevEntity[]
}