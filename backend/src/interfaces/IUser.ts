import ArticleEntity from "../adapters/database/entities/ArticleEntity"
import BadgeEntity from "../adapters/database/entities/BadgeEntity"
import ProjectEntity from "../adapters/database/entities/ProjectEntity"
import SkillEntity from "../adapters/database/entities/SkillEntity"
import SocialLinkEntity from "../adapters/database/entities/SocialLinkEntity"
import SeniorityEntity from "../core/domain/SeniorityEntity"
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