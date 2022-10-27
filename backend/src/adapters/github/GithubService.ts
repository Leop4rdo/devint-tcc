import axios from "axios"

export const getGithubUserProfile = async (username : string) => {
    const { data } = await axios.get(`https://api.github.com/users/${username}`)
    return data
}