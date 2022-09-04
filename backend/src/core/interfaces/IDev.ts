import AuthEntity from "../entities/AuthEntity"
import IAuthProps from "./IAuth"

export default interface IDevProps {
    id : string
    name : string
    bio ?: string
    gender : string
    status: string
    following ?: JSON
    followers ?: JSON
    profilePickUrl : string
    socialLinks : JSON
    comunityRating : number
    notifications : JSON
    autoDeclaredSeniority : boolean
    currentJob : string
    githubUsername : string
    openToWork : boolean
    birthday ?: Date | string
    auth : AuthEntity
}

export const genders = {
    MALE: "m",
    FEMALE: "f",
    OTHER: "o"
}

export const openToWork = {
    NO: false,
    YES: true
}

export const autoDeclaredSeniority ={
    NO: false,
    YES: true
}