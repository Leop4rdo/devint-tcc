import React, { createContext, ReactNode, useContext, useState } from "react";

interface IAuthContextProps {
    signed : boolean;
    token ?: string;
    userData ?: object | null
    signIn : (email: string, password: string) => any
}

const AuthContext = createContext<IAuthContextProps | null>(null)

const AuthProvider : React.FC<{ children : ReactNode }> = ({ children }) => {
    const handleAuth = (email : string, password : string) => {
        
    }

    const [ authData, setAuthData ] = useState<IAuthContextProps>({
        signed : false,
        token : '',
        userData : null,
        signIn : handleAuth
    } as IAuthContextProps);

    

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;