import api, { buildQuery, getToken, IResponse, PaginationQuery } from "."

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