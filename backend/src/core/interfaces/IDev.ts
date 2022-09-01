import AuthEntity from "../entities/AuthEntity"
import IAuthProps from "./IAuth"

export default interface IDevProps {
    id : string
    name : string
    bio : string
    gender : string
    birthday : Date | string
    following : JSON
    followers : JSON
    auth : AuthEntity
}

export const genders = {
    MALE: "m",
    FEMALE: "f",
    OTHER: "o"
}