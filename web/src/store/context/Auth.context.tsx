import React, { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services";
import { auth } from "../../services/auth.service";


interface IAuthContextProps {
    signed : boolean;
    token ?: string;
    userData ?: object | null
    signIn : (email: string, password: string) => Promise<any>
}

export const AuthContext = createContext<IAuthContextProps | null>(null)

export const AuthProvider : React.FC<{ children : ReactNode }> = ({ children }) => {
    const handleAuth = async (email : string, password : string) => {
        const res = await auth({email, password})
        console.log('auth res', res.hasError)

        setAuthData({
            signed: !res.hasError,
            token: res.data?.token || "",
            userData : res.data?.user || null
        })

        return res
    }

    const [ authData, setAuthData ] = useState({
        signed : false,
        token : '',
        userData : null,
    });

    return (
        <AuthContext.Provider value={{...authData, signIn : handleAuth}}>
            {children}
        </AuthContext.Provider>
    );
}
