export default interface IResponse {
    status? : number
    hasError? : boolean
    errors ?: any | any[]
    message?: string 
    data?: any
}