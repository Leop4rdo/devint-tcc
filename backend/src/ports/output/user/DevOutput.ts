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
    auth : Auth
    posts: Post[]
    articles: Article[]
    socialLinks : SocialLink[]
    careerFocus : CareerFocus
    autoDeclaredSeniority : Seniority
    skills: Skill[]
    projects: Project[]
    badges: Badge[]   


    constructor(props : IDevProps) {
        Object.assign(this, props);
    }
}