import React from "react"
import { BrowserRouter } from "react-router-dom";
import PublicRouter from "./Public.routes";

const AppRouter : React.FC = () => {

    return (
        <BrowserRouter>
            {
                true ? 
                    <PublicRouter />
                :
                    <></>
            }
        </BrowserRouter>
    )
}

export default AppRouter