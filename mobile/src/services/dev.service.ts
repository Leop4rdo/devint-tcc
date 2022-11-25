import api, { buildQuery, getToken, IResponse, PaginationQuery } from '.'

interface UserQueryFilter extends PaginationQuery {
    search ?: string
    ignore ?: string[]
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

export const listCareerFocus = async () : Promise<IResponse> => {
    try {
        const { data } = await api.get(
            '/career-focus',
            { headers: { Authorization: `Baerer ${ await getToken() }` } }
        )

        return data as IResponse

    } catch (err : any) {
        console.log(err);
        return err.response.data as IResponse
    }
}
export const listSeniorities = async () : Promise<IResponse> => {
    try {
        const { data } = await api.get(
            '/seniorities',
            { headers: { Authorization: `Baerer ${ await getToken() }` } }
        )

        return data as IResponse

    } catch (err : any) {
        console.log(err);
        return err.response.data as IResponse
    }
}

type devUpdateInput = {
    name : string
    bio : string
    gender : string
    profilePicUrl : string
    bannerURI : string
    currentJob : string
    githubUsername : string
    openToWork : boolean
    birthday : string
    careerFocus : { id : string }
    autoDeclaredSeniority : { id : string }
    skills: {id : string }[]
}

export const update = async (body : devUpdateInput, id : string) : Promise<IResponse> => {
    try {
        const { data } = await api.put(
            `/devs/${id}`,
            body,
            { headers: { Authorization: `Baerer ${ await getToken() }` } }
        )

        return data as IResponse
    } catch (err : any) {
        console.log(err);
        return err.response.data as IResponse
    }
}

export const listSkills = async () : Promise<IResponse> => {
    try {
        const { data } = await api.get('/skills', { headers: { Authorization: `Baerer ${ await getToken() }` } })

        return data as IResponse
    } catch (err : any) {
        console.log(err);
        return err.response.data as IResponse
    }
}