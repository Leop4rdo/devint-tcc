import Post from "@domains/Post";
import Article from "@domains/Article";
import Badge from "@domains/Badge";
import CareerFocus from "@domains/CareerFocus";
import Project from "@domains/Project";
import Skill from "@domains/Skill";
import SocialLink from "@domains/SocialLink";
import Seniority from "@domains/Seniority";
import Auth from "@domains/Auth";
import IDevProps from "@domains/interfaces/IDev";
import DevMinimalOutput from "./DevMinimalOutput";
import { Timestamp } from "typeorm";

export default class DevOutput {
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
    email : string
    posts: Post[]
    private auth : Auth
    articles: Article[]
    socialLinks : SocialLink[]
    careerFocus : CareerFocus
    autoDeclaredSeniority : Seniority
    skills: Skill[]
    projects: Project[]
    badges: Badge[]   
    following ?: DevMinimalOutput[]
    followers ?: DevMinimalOutput[]
    createdAt : Timestamp
    updatedAt : Timestamp


    constructor(props : IDevProps, devId ?: string) {
        Object.assign(this, props);
        this.auth = undefined
        this.email = props.auth.email 
        this.createdAt = props.createdAt
        this.updatedAt = props.updatedAt
        
        this.following = (props.following) ? props.following.map((dev) => new DevMinimalOutput(dev)) : undefined
        this.followers = (props.followers) ? props.followers.map((dev) => new DevMinimalOutput(dev)) : undefined
    }
}
