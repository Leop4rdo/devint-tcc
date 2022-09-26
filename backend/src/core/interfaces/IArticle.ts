import DevEntity from "../entities/DevEntity"

export default interface IArticleProps {
  id : string
  title : string
  content : string
  upVotes : JSON
  downVotes : JSON
  comments : JSON
  writter : DevEntity
}