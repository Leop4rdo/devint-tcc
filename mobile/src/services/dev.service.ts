import api, { buildQuery, getToken, IResponse } from '.'

interface IDevListRequest {
    limit ?: number
    offset ?: number
}

export const list = async (query ?: IDevListRequest) : Promise<IResponse> => {
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