import api, { buildQuery, getToken, IResponse, PaginationQuery } from "."

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

export const list = async (query ?: PaginationQuery) : Promise<IResponse> => {
    try {
        const { data } = await api.get(
            (query) ? `/posts?${buildQuery(query)}` : '/posts',
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at post list')
        console.log(err)
        return err.response.data as IResponse
    }
}

export const addHeart = async (id : string) => {
    try {
        const { data } = await api.patch(
            `/posts/${id}/toggle-heart`,
            {},
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at post list')
        console.log(err)
        return err.response.data as IResponse
    }
}

export const getById = async (id : string) => {
    try {
        const { data } = await api.get(
            `/posts/${id}`,
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at get post by id')
        console.log(err)
        return err.response.data as IResponse
    }
}

interface addCommentRequestBody {
    content : string
}

export const addComment = async (body : addCommentRequestBody, postId : string) => {
    try {
        const { data } = await api.post(
            `/posts/${postId}/comments`,
            body,
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err)
        return err.response?.data as IResponse 
    }
}

export const addAnswer = async (body : addCommentRequestBody, commentId : string) => {
    try {
        const { data } = await api.patch(
            `/comments/${commentId}/answer`,
            body,
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err)
        return err.response?.data as IResponse 
    }
}


export const addHeartToComment = async (commentId : string) => {
    try {
        const { data } = await api.patch(
            `/comments/${commentId}/toggle-heart`,
            {},
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err)
        return err.response?.data as IResponse 
    }
}
