import api, { getToken, IResponse } from "."

interface createPostRequestBody {
    content : string,
    attachments : string[]
}

export const create = async (body : createPostRequestBody) => {
    try {
        const { data } = await api.post(
            '/posts',
            body,
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err)
        return err.response?.data as IResponse 
    }
}