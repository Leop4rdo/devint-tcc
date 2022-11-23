import axios from "axios"
import api, { IResponse } from "."

const GITHUB_API_URL = 'https://api.github.com'

export const listRepositoriesFromUser = async (username : string) => {
    try {
        const { data } = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`)

        return data
    } catch (err : any) {
        console.log(err)
        return err.response.data as IResponse
    }
}