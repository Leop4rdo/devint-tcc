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

export const baseUrl = "http://localhost:8080/api/v1" 

export const getToken = () => {
    return localStorage.getItem("devint-auth")
}

const api = axios.create({
    baseURL: baseUrl,
})

export const buildQuery = (queryObj : Object) => Object.entries(queryObj).map(([key, val]) => `${key}=${val}`).join('&')

export default api
