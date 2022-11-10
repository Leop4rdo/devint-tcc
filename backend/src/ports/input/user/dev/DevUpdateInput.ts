import ICareerProps from "@src/core/domain/interfaces/ICareerFocus"
import IDevProps from "@src/core/domain/interfaces/IDev"
import ISeniorityProps from "@src/core/domain/interfaces/ISeniority"
import ISkillProps from "@src/core/domain/interfaces/ISkill"
import ISocialLinkProps from "@src/core/domain/interfaces/ISocialLink"

export default class DevUpdateInput{
    name : string
    bio : string
    gender : string
    profilePicUrl : string
    bannerURI : string
    currentJob : string
    githubUsername : string
    openToWork : boolean
    birthday : Date
    socialLinks : ISocialLinkProps[]
    careerFocus : ICareerProps
    autoDeclaredSeniority : ISeniorityProps
    skills: ISkillProps[]
    
    constructor(props: IDevProps){
        this.autoDeclaredSeniority = props.autoDeclaredSeniority
        this.bio = props.bio
        this.gender = props.gender
        this.profilePicUrl = props.profilePicUrl
        this.bannerURI = props.bannerURI
        this.currentJob = props.currentJob
        this.githubUsername = props.githubUsername
        this.openToWork = props.openToWork
        this.birthday = props.birthday
        this.socialLinks = props.socialLinks 
        this.careerFocus = props.careerFocus
        this.autoDeclaredSeniority = props.autoDeclaredSeniority
        this.skills = props.skills
    }
}