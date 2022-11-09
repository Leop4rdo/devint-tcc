import IArticleProps from "./IArticle"
import ICareerProps from "./ICareerFocus"
import { IPost } from "./IPost"
import IProjectProps from "./IProject"
import ISeniorityProps from "./ISeniority"
import ISkillProps from "./ISkill"
import ISocialLinkProps from "./ISocialLink"

export default interface IDevMinimal {
    id : string
    name : string
    profilePicUrl : string
    githubUsername : string
    following : IDevMinimal[]
    followers : []
}

export interface IDev {
    id ?: string
    name : string
    email : string
    following : IDevMinimal[]
    followers : IDevMinimal[]
    bio : string
    gender : string
    profilePicUrl : string
    bannerURI : string
    comunityRating : number
    notifications : JSON
    currentJob : string
    githubUsername : string
    openToWork : boolean
    birthday : string
    posts: IPost[]
    articles: IArticleProps[]
    socialLinks : ISocialLinkProps[]
    careerFocus : ICareerProps
    autoDeclaredSeniority : ISeniorityProps
    skills: ISkillProps[]
    projects: IProjectProps[]
    createdAt : string
    updatedAt : string
}
