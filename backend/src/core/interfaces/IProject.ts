export default interface IProjectProps {
  id: string
  name : string
  githubRepoUrl: string
  followers: JSON
  license: String
  acceptDonations: boolean
  helpWanted: boolean
  desc: string
  upVotes: JSON
  downVotes: JSON
}