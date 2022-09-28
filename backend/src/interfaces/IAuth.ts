export const userRoles = {
    DEV : 0,
    COMPANY : 1,
}

export default interface IAuthProps {
    id : string
    email : string
    password : string
    role : number
    enabled : number
}