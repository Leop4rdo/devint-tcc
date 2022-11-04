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

type updateDevRequestBody = {
    name : string
    bio : string
    gender : string
    profilePicUrl : string
    currentJob : string
    githubUsername : string
    openToWork : boolean
    birthday : Date
    socialLinks : {
        name : string
        url : string
        owner : string
    }
    careerFocus : { id : string }
    autoDeclaredSeniority : { id : string }
    skills: { id : string}[]
}

export const update = async (body : updateDevRequestBody, id: string) : Promise<IResponse> => {
    try {
        const { data } = await api.patch(`devs/${id}`,
            body,
            { headers: { Authorization: `Baerer ${ await getToken() }` } }
        )

        return data as IResponse

    } catch (err : any) {
        console.log(err);
        return err.response.data as IResponse
    }
}

