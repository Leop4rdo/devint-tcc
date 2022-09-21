import api, { IResponse } from "."

interface IAuthRequestBody {
    email : string,
    password : string,
}

export const auth = async (body : IAuthRequestBody) : Promise<IResponse> => {
    try {
        const { data } = await api.post("/auth", body)
        return data as IResponse;
    } catch (err : any) {
        console.log(err.response.data)
        return err.response.data as IResponse
    }
}

interface IRegisterRequestBody {
    name : string,
    password : string,
    email : string,
    birthday : string
}

export const register = async (body : IRegisterRequestBody) => {
    try {  
        const { data } = await api.post("/users", body)

        return data as IResponse
    } catch (err : any) {
        console.log(err.response.data)
        console.log("error endpoint: /users")
        return err.response.data as IResponse
    }
}