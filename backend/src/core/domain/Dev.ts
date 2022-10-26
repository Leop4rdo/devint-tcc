import IDevProps from "@src/core/domain/interfaces/IDev"
import { Timestamp } from "typeorm"
import Article from "./Article"
import Auth from "./Auth"
import Badge from "./Badge"
import CareerFocus from "./CareerFocus"
import Post from "./Post"
import Project from "./Project"
import Seniority from "./Seniority"
import Skill from "./Skill"
import SocialLink from "./SocialLink"


export default class Dev {
    id: string
    name : string
    follows : Dev[]
    followers : Dev[]
    bio : string
    gender : string
    profilePicUrl : string
    comunityRating : number
    notifications : JSON
    currentJob : string
    githubUsername : string
    openToWork : boolean
    birthday : Date
    auth : Auth
    posts: Post[]
    articles: Article[]
    socialLinks : SocialLink[]
    careerFocus : CareerFocus
    autoDeclaredSeniority : Seniority
    skills: Skill[]
    projects: Project[]
    badges: Badge[]   
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : IDevProps) {
        Object.assign(this, props)
    }
}
