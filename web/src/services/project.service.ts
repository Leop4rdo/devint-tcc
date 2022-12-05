import api, { buildQuery, getToken, IResponse, PaginationQuery } from "."
import IProjectProps from "../interfaces/IProject"
interface UserQueryFilter extends PaginationQuery {
    search ?: string
}



export const getProjectByUser = async (userId : string ,query ?: PaginationQuery) : Promise<IResponse> => {
    try {
        const { data } = await api.get(
            `/devs/${userId}/projects${(query)? `?${buildQuery(query)}`: '' }`,
            { headers: { Authorization: `Baerer ${getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at post list')
        console.log(err)
        return err.response.data as IResponse
    }
}

export const listMinimal = async (devId : string) : Promise<IResponse> => {
    try {
        const { data } = await api.get(
            `/devs/${devId}/projects/list-minimal`,
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at project list by dev')
        console.log(err)
        return err.response.data as IResponse
    }
}

export const findById = async (id : string) => {
    try {
        const { data } = await api.get(
            `/projects/${id}`,
            { headers: { Authorization: `Baerer ${ getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at get post by id')
        console.log(err)
        return err.response.data as IResponse
    }
}


export const list = async (query ?: UserQueryFilter) : Promise<IResponse> => {
    try {
        const { data } = await api.get(
            (query) ? `/devs?${buildQuery(query)}` : '/devs',
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err)
        return err.response.data as IResponse
    }
}


export const create = async (body : object) => {
    try {
        const { data } = await api.post(
            '/projects',
            body,
            { headers: { Authorization: `Baerer ${getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err)
        return err.response?.data as IResponse 
    }
}


export const DeleteById = async (id : string) => {
    try {
        const { data } = await api.delete(
            `/projects/${id}`,
            { headers: { Authorization: `Baerer ${ getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at get post by id')
        console.log(err)
        return err.response.data as IResponse
    }
}


export const GetByIdProject = async (id : string) => {
    try {
        const { data } = await api.get(
            `/projects/${id}`,
            { headers: { Authorization: `Baerer ${ getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at get post by id')
        console.log(err)
        return err.response.data as IResponse
    }
}


export const update = async (body : any, id : string) : Promise<IResponse> => {
    try {
        const { data } = await api.put(
            `/projects/${id}`,
            body,
            { headers: { Authorization: `Baerer ${ await getToken() }` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err);
        return err.response.data as IResponse
    }
}


export const toggleHeart = async (id : string) => {
    try {
        const { data } = await api.patch(
            `/projects/${id}/toggle-heart`,
            {},
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err)
        return err.response.data as IResponse
    }
}





