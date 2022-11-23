import api, { buildQuery, getToken, IResponse, PaginationQuery } from "."


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