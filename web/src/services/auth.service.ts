import api, { IResponse } from "."

interface IAuthRequestBody {
    email: string,
    password: string,
}

export const auth = async (body: IAuthRequestBody): Promise<IResponse> => {
    try {
        const { data } = await api.post("/auth", body)
        return data as IResponse;
    } catch (err: any) {
        console.log(err)
        return err.response.data as IResponse
    }
}

interface IRegisterRequestBody {
    name: string,
    password: string,
    email: string,
    gender?: string
    birthday?: string,
    cnpj?: string,
}

export const register = async (body: IRegisterRequestBody) => {

    try {
        const { data } = await api.post("/users", body)

        return data as IResponse
    } catch (err: any) {
        console.log(err)
        console.log("error endpoint: /users")
        return err.response.data as IResponse
    }
}

export const requestPasswordRecovery = async (email: string) => {
    try {
        const { data } = await api.post("request-password-recovery", { email: email })

        return data as IResponse
    } catch (err: any) {
        console.log(err)
        console.log("error endpoint: /request-password-recovery")
        return err.response.data as IResponse
    }
}

interface IChangePasswordRequestBody {
    password: string,
    token: string
}

export const changePassword = async (body: IChangePasswordRequestBody) => {
    try {
        const { data } = await api.patch("change-password", body)
        console.log(data)

        return data as IResponse
    } catch (err: any) {
        console.log(err)
        console.log("error endpoint: /change-password")
        return err.response.data as IResponse
    }
}


export const emailConfirm = async (email: string) => {
    try {
        const { data } = await api.patch("email-confirm", { email: email })
        console.log(data)

        return data as IResponse
    } catch (err: any) {
        console.log(err)
        console.log("error endpoint : /email-confirm")
        return err.response.data as IResponse
    }
}