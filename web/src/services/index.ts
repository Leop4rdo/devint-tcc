import axios from "axios"

export interface IResponse {
    status : number
    hasError : boolean,
    errorCode ?: string,
    errorMessage ?: string,
    data ?: any
}


// export const baseUrl = "http://localhost:8082/api/v1"
export const baseUrl = "http://10.107.144.17:8080/api/v1"

const api = axios.create({
    baseURL : baseUrl
})

export default api
