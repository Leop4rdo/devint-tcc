import React, { createContext, ReactNode, useContext, useState } from "react";
import { auth } from "../../services/auth.service";


interface IAuthContextProps {
    signed : boolean;
    token ?: string;
    userData ?: object | null
    signIn ?: (email: string, password: string) => Promise<any>
}

const AuthContext = createContext<IAuthContextProps | null>(null)

const AuthProvider : React.FC<{ children : ReactNode }> = ({ children }) => {
    const handleAuth = async (email : string, password : string) => {
        const res = await auth({ email: email, password: password })

        setAuthData({
            signed: true,
            token: res.data.token,
            userData : res.data.user
        })
    }

    const [ authData, setAuthData ] = useState<IAuthContextProps>({
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

export default AuthProvider;