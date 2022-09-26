export default interface IResponse {
    status? : number
    hasError? : boolean

    errorCode?: string
    errorMessage?: string | Object | Object[]
    data?: any
}