export default interface IProjectProps {
  name : string
  github_repo_url: string
  followers: JSON
  license: String
  accept_donations: boolean
  help_wanted: boolean
  desc: string
  upvotes: number
  downvotes: number
}