import ArticleEntity from "../entities/ArticleEntity"
import BadgeEntity from "../entities/BadgeEntity"
import ProjectEntity from "../entities/ProjectEntity"
import SeniorityEntity from "../entities/SeniorityEntity"
import SkillEntity from "../entities/SkillEntity"
import SocialLinkEntity from "../entities/SocialLinkEntity"

export interface IUserProps {
    id? : string
    name : string
    email : string
    password : string
    role : number
    cnpj? : string
    gender? : string
    status ?: string
    profilePicUrl ?: string
    socialLinks : SocialLinkEntity[]
    birthday? : Date | string
    comunityRating ?: number
    notifications ?: JSON
    currentJob ?: string
    githubUsername ?: string
    openToWork ?: boolean
    skills ?: SkillEntity[]
    projects : ProjectEntity[]
    badges : BadgeEntity []
    posts : ProjectEntity []
    articles : ArticleEntity []
    autoDeclaredSeniority : SeniorityEntity
    following? : JSON
    followers? : JSON
}

export const userRoles = {
    DEV : 0,
    COMPANY : 1,
}