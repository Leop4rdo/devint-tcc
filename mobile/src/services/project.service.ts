import api, { buildQuery, getToken, IResponse, PaginationQuery } from "."
import IDevMinimal from "../interfaces/IDev"
import IProject from "../interfaces/IProject"

export const listByDev = async (devId : string, query ?: PaginationQuery) : Promise<IResponse> => {
    try {
        const { data } = await api.get(
            `/devs/${devId}/projects${(query) ? `?${buildQuery(query)}` : ''}`,
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at project list by dev')
        console.log(err)
        return err.response.data as IResponse
    }
}

export const create = async (body : IProject) : Promise<IResponse> => {
    try {
        const { data } = await api.post(
            `/projects`,
            body,
            { headers: { Authorization: `Baerer ${ await getToken() }` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err);
        return err.response.data as IResponse
    }
}