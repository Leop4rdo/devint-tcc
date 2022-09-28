import ArticleEntity from "../adapters/database/entities/ArticleEntity"
import AuthEntity from "../adapters/database/entities/AuthEntity"
import BadgeEntity from "../adapters/database/entities/BadgeEntity"
import PostEntity from "../adapters/database/entities/PostEntity"
import ProjectEntity from "../adapters/database/entities/ProjectEntity"
import SeniorityEntity from "../adapters/database/entities/SeniorityEntity"
import SkillEntity from "../adapters/database/entities/SkillEntity"
import SocialLinkEntity from "../adapters/database/entities/SocialLinkEntity"

export default interface IDevProps {
    id : string
    name : string
    bio ?: string
    gender ?: string
    status ?: string
    following ?: JSON
    followers ?: JSON
    profilePicUrl : string
    socialLinks : SocialLinkEntity[]
    comunityRating : number
    notifications : JSON
    currentJob : string
    githubUsername : string
    openToWork : boolean
    birthday ?: Date | string
    auth : AuthEntity
    skills : SkillEntity[]
    projects : ProjectEntity[]
    badges : BadgeEntity[]
    posts : PostEntity[]
    articles : ArticleEntity[]
    autoDeclaredSeniority : SeniorityEntity
}

export const genders = {
    MALE: "m",
    FEMALE: "f",
    OTHER: "o"
}
