import axios from "axios"

export interface IResponse {
    status : number
    hasError : boolean,
    errorCode ?: string,
    errorMessage ?: string,
    data ?: any
}


export const baseUrl = "http://10.107.130.62:8080/api/v1"

const api = axios.create({
    baseURL : baseUrl
})

export default api
