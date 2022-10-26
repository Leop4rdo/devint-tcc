import { Timestamp } from "typeorm"
import ArticleEntity from "../../../adapters/database/entities/ArticleEntity"
import AuthEntity from "../../../adapters/database/entities/AuthEntity"
import BadgeEntity from "../../../adapters/database/entities/BadgeEntity"
import PostEntity from "../../../adapters/database/entities/PostEntity"
import ProjectEntity from "../../../adapters/database/entities/ProjectEntity"
import SeniorityEntity from "../../../adapters/database/entities/SeniorityEntity"
import SkillEntity from "../../../adapters/database/entities/SkillEntity"
import SocialLinkEntity from "../../../adapters/database/entities/SocialLinkEntity"
import IArticleProps from "./IArticle"
import IBadgeProps from "./IBadge"
import ICareerProps from "./ICareerFocus"
import IPostProps from "./IPost"
import IProjectProps from "./IProject"
import ISeniorityProps from "./ISeniority"
import ISkillProps from "./ISkill"
import ISocialLinkProps from "./ISocialLink"

export default interface IDevProps {
    id ?: string
    name : string
    follows : IDevProps[]
    followers : IDevProps[]
    bio : string
    gender : string
    profilePicUrl : string
    comunityRating : number
    notifications : JSON
    currentJob : string
    githubUsername : string
    openToWork : boolean
    birthday : Date
    auth : AuthEntity
    posts: IPostProps[]
    articles: IArticleProps[]
    socialLinks : ISocialLinkProps[]
    careerFocus : ICareerProps
    autoDeclaredSeniority : ISeniorityProps
    skills: ISkillProps[]
    projects: IProjectProps[]
    badges: IBadgeProps[]   
    createdAt : Timestamp
    updatedAt : Timestamp
}

export const genders = {
    MALE: "m",
    FEMALE: "f",
    OTHER: "o"
}
