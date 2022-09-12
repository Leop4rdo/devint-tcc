import React, { useContext } from "react"
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "store/context/Auth.context";
import PublicRouter from "./Public.routes";

const AppRouter : React.FC = () => {
    const authContext = useContext(AuthContext)

    return (
        <BrowserRouter>
            {
                authContext?.signed ? 
                    <></>
                :
                    <PublicRouter />
            }
        </BrowserRouter>
    )
}

export default AppRouter