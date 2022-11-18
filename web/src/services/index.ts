import axios from "axios"

export interface IResponse {
    status: number
    hasError: boolean,
    errorCode?: string,
    errorMessage?: string,
    data?: any
}

export interface PaginationQuery {
    limit ?: number
    offset ?: number
}

//   export const baseUrl = "http://localhost:8080/api/v1"
// export const baseUrl = "http://192.168.1.7:8080/api/v1"
export const baseUrl = "http://10.107.144.6:8080/api/v1" 
//export const baseUrl = "http://7a72-187-84-34-232.sa.ngrok.io/api/v1"
//export const baseUrl = "https://8c23-187-84-34-237.sa.ngrok.io/api/v1"

export const getToken = () => {
    return localStorage.getItem("devint-auth")
}

const api = axios.create({
    baseURL: baseUrl,
})

export const buildQuery = (queryObj : Object) => Object.entries(queryObj).map(([key, val]) => `${key}=${val}`).join('&')

export default api
