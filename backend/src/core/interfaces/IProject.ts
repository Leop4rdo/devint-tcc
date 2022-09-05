export default interface IProjectProps {
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