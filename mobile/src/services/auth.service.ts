import axios from "axios"
import { baseUrl } from "."

export const auth = async (body : object) => {
    try {
        const { data } = await axios.post(`${baseUrl}/auth`, body)
        return data;
    } catch (e) {
        console.error(e)
    }
}