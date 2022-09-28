import IDevProps from "./IDev"

export default interface IArticleProps {
  id : string
  title : string
  content : string
  upVotes : JSON
  downVotes : JSON
  comments : JSON
  writter : IDevProps
}