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

export const getById = async (id : string) : Promise<IResponse> => {
    try {
        const { data } = await api.get(
            `/projects/${id}`,
            { headers: { Authorization: `Baerer ${ await getToken()}` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log('error at project list by dev')
        console.log(err)
        return err.response.data as IResponse
    }
}

export const deleteProject = async (id : string) : Promise<IResponse> => {
    try {
        const { data } = await api.delete(
            `/projects/${id}`,
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

export const update = async (body : IProject, id : string) : Promise<IResponse> => {
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
