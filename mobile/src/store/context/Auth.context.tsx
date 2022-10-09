import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IDevMinimal } from "../../interfaces/IDev";
import { auth } from "../../services/auth.service";
import { deleteFromLocalStorage, getFromLocalStorage, setOnLocalStorage } from "../../utils/localStorage";



interface IAuthContextProps {
    signed : boolean;
    token ?: string;
    userData ?: IDevMinimal
    signIn : (email: string, password: string) => Promise<any>
    signOut : () => void
}

export const AuthContext = createContext<IAuthContextProps | null>(null)

export const AuthProvider : React.FC<{ children : ReactNode }> = ({ children }) => {
    
    const [ authData, setAuthData ] = useState({
        signed : false,
        token : '',
        userData : null,
    });

    const handleAuth = async (email : string, password : string) => {
        const res = await auth({email, password})

        setAuthData({
            signed: !res.hasError || false,
            token: res.data?.token || "",
            userData : res.data?.user || null
        })

        setOnLocalStorage('devint-authorization', res.data?.token || "")
        setOnLocalStorage('devint-login', JSON.stringify({ email, password }))

        return res
    }

    const handleSignOut = () => {
        setAuthData({
            signed : false,
            token : "",
            userData : null
        })

        setOnLocalStorage('devint-authorization', authData.token)
        deleteFromLocalStorage('devint-login')
    }

    useEffect(() => {
        getFromLocalStorage('devint-login').then((data) => {
            if (!data) return

            const login = JSON.parse(data)

            handleAuth(login.email, login.password)
        })
    }, [])


    return (
        <AuthContext.Provider value={{...authData, signOut : handleSignOut, signIn : handleAuth}}>
            {children}
        </AuthContext.Provider>
    );
}
