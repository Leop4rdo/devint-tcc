export default interface IResponse {
    status? : number
    hasError? : boolean

    errorCode?: string
    errorMessage?: string
    data?: any
}