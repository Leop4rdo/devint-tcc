import { Timestamp } from "typeorm"
import ArticleEntity from "../../adapters/database/entities/ArticleEntity"
import AuthEntity from "../../adapters/database/entities/AuthEntity"
import BadgeEntity from "../../adapters/database/entities/BadgeEntity"
import CareerFocusEntity from "../../adapters/database/entities/CareerFocusEntity"
import DevEntity from "../../adapters/database/entities/DevEntity"
import ProjectEntity from "../../adapters/database/entities/ProjectEntity"
import SeniorityEntity from "../../adapters/database/entities/SeniorityEntity"
import SkillEntity from "../../adapters/database/entities/SkillEntity"
import SocialLinkEntity from "../../adapters/database/entities/SocialLinkEntity"
import IDevProps from "../../interfaces/IDev"

export default class Dev {
    id: string
    name : string
    bio : string
    gender : string
    status: string 
    profilePicUrl : string
    comunityRating : number
    notifications : JSON
    currentJob : string
    githubUsername : string
    openToWork : boolean
    birthday : Date
    following: DevEntity[]
    auth : AuthEntity
    posts: ProjectEntity[]
    articles: ArticleEntity[]
    socialLinks : SocialLinkEntity[]
    careerFocus : CareerFocusEntity[]
    autoDeclaredSeniority : SeniorityEntity
    skills: SkillEntity[]
    projects: ProjectEntity[]
    badges: BadgeEntity[]   
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IDevProps) {
        Object.assign(this, props)
    }
}