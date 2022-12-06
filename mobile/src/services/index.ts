import axios from "axios"
import { getFromLocalStorage } from "../utils/localStorage"

export interface IResponse {
    status : number
    hasError : boolean,
    errorCode ?: string,
    errorMessage ?: string,
    data ?: any
}

export interface PaginationQuery {
    limit ?: number
    offset ?: number
}

export const baseUrl = "http://192.168.0.105:8080/api/v1"; // PRODUCTION API (azure)

export const getToken = async () => { 
    return await getFromLocalStorage('devint-authorization')
}

const api = axios.create({
    baseURL : baseUrl,
    headers: { Authorization: `Bearer ${getToken()}` }
})

export const buildQuery = (queryObj : Object) => {
    return Object.entries(queryObj).map(([key, val]) => `${key}=${val}`).join('&')
}

export default api
