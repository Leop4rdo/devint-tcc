import ArticleEntity from "@entities/ArticleEntity"
import AuthEntity from "@entities/AuthEntity"
import BadgeEntity from "@entities/BadgeEntity"
import CareerFocusEntity from "@entities/CareerFocusEntity"
import DevEntity from "@entities/DevEntity"
import ProjectEntity from "@entities/ProjectEntity"
import SkillEntity from "@entities/SkillEntity"
import SocialLinkEntity from "@entities/SocialLinkEntity"
import IDevProps from "@src/interfaces/IDev"
import { Timestamp } from "typeorm"
import SeniorityEntity from "./SeniorityEntity"


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