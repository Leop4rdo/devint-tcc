import api, { buildQuery, getToken, IResponse, PaginationQuery } from '.'

export const list = async (query ?: PaginationQuery) : Promise<IResponse> => {
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

export const toggleFollow = async (targetId : string) : Promise<IResponse> => {
    try {
        const { data } = await api.patch(
            `/devs/${targetId}/toggle-follow`,
            {},
            { headers: { Authorization: `Baerer ${ await getToken() }` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err)
        return err.response.data as IResponse
    }
}

export const findById = async ( id : string ) : Promise<IResponse> => {
    try {
        const { data } = await api.get(
            (id) ? `/devs/${id}` : '/devs',
            { headers: { Authorization: `Baerer ${ await getToken() }` } }
        )

        return data as IResponse

    } catch (err : any) {
        console.log(err);
        return err.response.data as IResponse
    }
}

