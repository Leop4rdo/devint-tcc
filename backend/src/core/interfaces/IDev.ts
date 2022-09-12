import ArticleEntity from "../entities/ArticleEntity"
import AuthEntity from "../entities/AuthEntity"
import BadgeEntity from "../entities/BadgeEntity"
import ProjectEntity from "../entities/ProjectEntity"
import SeniorityEntity from "../entities/SeniorityEntity"
import SkillEntity from "../entities/SkillEntity"
import IAuthProps from "./IAuth"

export default interface IDevProps {
    id : string
    name : string
    bio ?: string
    gender ?: string
    status ?: string
    following ?: JSON
    followers ?: JSON
    profilePicUrl : string
    socialLinks : JSON
    comunityRating : number
    notifications : JSON
    currentJob : string
    githubUsername : string
    openToWork : boolean
    birthday ?: Date | string
    auth : AuthEntity
    skills : SkillEntity []
    projects : ProjectEntity[]
    badges : BadgeEntity []
    posts : ProjectEntity []
    articles : ArticleEntity []
    autoDeclaredSeniority : SeniorityEntity
}

export const genders = {
    MALE: "m",
    FEMALE: "f",
    OTHER: "o"
}
