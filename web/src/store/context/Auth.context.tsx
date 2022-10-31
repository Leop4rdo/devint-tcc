import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../../services";
import { auth } from "../../services/auth.service";


interface IAuthContextProps {
    signed : boolean;
    token ?: string;
    userData ?: any
    signIn : (email: string, password: string) => Promise<any>
    signOut : () => void
}

export const AuthContext = createContext<IAuthContextProps | null>(null)

export const AuthProvider : React.FC<{ children : ReactNode }> = ({ children }) => {
    const handleAuth = async (email : string, password : string) => {
        const res = await auth({email, password})


        setAuthData({
            signed: res.hasError === false,
            token: res.data?.token || "",
            userData : res.data?.user || null
        })

        localStorage.setItem('devint-auth', res.data?.token)
        localStorage.setItem('devint-login', JSON.stringify({ email, password }))

        return res
    }

    const handleSignOut = () => {
        setAuthData({
            signed : false,
            token : "",
            userData : null
        })

        localStorage.removeItem('devint-auth')
        localStorage.removeItem('devint-login')
    }

    const [ authData, setAuthData ] = useState({
        signed : false,
        token : '',
        userData : null,
    });

    useEffect(() => {
        const storedAuth = localStorage.getItem('devint-login')

        if (!storedAuth) return

        const parsedAuth = JSON.parse(storedAuth)

        handleAuth(parsedAuth.email, parsedAuth.password)
    }, [])

    return (
        <AuthContext.Provider value={{...authData, signIn : handleAuth, signOut : handleSignOut}}>
            {children}
        </AuthContext.Provider>
    );
}
