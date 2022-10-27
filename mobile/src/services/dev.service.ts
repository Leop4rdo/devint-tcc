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
