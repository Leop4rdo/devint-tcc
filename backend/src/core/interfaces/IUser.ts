export interface IUserProps {
    id? : string
    name : string
    email : string
    password : string
    role : number
    cnpj? : string
    gender? : string
    birthday? : Date | string
    following? : JSON
    followers? : JSON
}

export const userRoles = {
    DEV : 0,
    COMPANY : 1,
}