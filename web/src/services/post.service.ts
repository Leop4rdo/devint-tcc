import { ProjectMinimal } from "interfaces/IProject"
import api, { buildQuery, getToken, IResponse, PaginationQuery } from "."

interface createPostRequestBody {
    content : string,
    attachments : string[]
    project ?: ProjectMinimal
}

export const create = async (body : createPostRequestBody) => {
    try {
        const { data } = await api.post(
            '/posts',
            body,
            { headers: { Authorization: `Baerer ${getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err)
        return err.response?.data as IResponse 
    }
}

interface PostListQuery extends PaginationQuery {
    order ?: 'random' | 'trending' | 'latest'
}

export const list = async (query ?: PostListQuery) : Promise<IResponse> => {
    try {
        const { data } = await api.get(
            (query) ? `/posts?${buildQuery(query)}` : '/posts',
            { headers: { Authorization: `Baerer ${getToken()}` } }
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
            { headers: { Authorization: `Baerer ${getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at post list')
        console.log(err)
        return err.response.data as IResponse
    }
}


export const findById = async (id : string) => {
    try {
        const { data } = await api.get(
            `/posts/${id}`,
            { headers: { Authorization: `Baerer ${ getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at get post by id')
        console.log(err)
        return err.response.data as IResponse
    }
}

export const addHeartToComment = async (commentId : string) => {
    try {
        const { data } = await api.patch(
            `/comments/${commentId}/toggle-heart`,
            {},
            { headers: { Authorization: `Baerer ${ getToken() }` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err)
        return err.response?.data as IResponse 
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
            { headers: { Authorization: `Baerer ${ getToken() }` } }
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
            { headers: { Authorization: `Baerer ${ getToken() }` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err)
        return err.response?.data as IResponse 
    }
}

export const getPostsByUser = async ( userId : string, query ?: PaginationQuery ) => {
    try {

        const { data } = await api.get(
            `/devs/${userId}/posts${(query)? `?${buildQuery(query)}`: '' }`,
            { headers: { Authorization: `Baerer ${getToken()}` } }
        )

        return data as IResponse

    } catch (err : any) {
        console.log(err);
        return err.response?.data as IResponse
        
    }
}


export const listProjectPosts = async (id : string, query ?: PostListQuery) : Promise<IResponse> => {
    try {
        const { data } = await api.get(
            (query) ? `/projects/${id}/posts?${buildQuery(query)}` : `/projects/${id}/posts`,
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at post list')
        console.log(err)
        return err.response.data as IResponse
    }
}

