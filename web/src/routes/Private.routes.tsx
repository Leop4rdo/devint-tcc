import Feed from "pages/private/Feed";
import React from "react"
import { Route, Routes } from "react-router-dom"

const PrivateRouter: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Feed />}/>
        </Routes>
    );
}

export default PrivateRouter;
