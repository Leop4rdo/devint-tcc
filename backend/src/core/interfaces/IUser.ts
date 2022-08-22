export interface IUserProps {
    id? : string
    name : string
    email : string
    password : string
    enabled : boolean
    role : number
}

export const userRoles = {
    DEV : 0,
    COMPANY : 1,
}