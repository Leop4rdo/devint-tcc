import CompanyRegistrationPage from "pages/company/Registration";
import DevRegistrationPage from "pages/dev/Registration";
import LoginPage from "pages/Login";
import LoginWapper from "components/LoginWapper";
import Register from "pages/Register";
import React from "react"
import { Routes, Route } from "react-router-dom"


const PublicRouter : React.FC = () => {
    return (
        <Routes>
            <Route index element={<LoginPage />} />
            <Route path="loginwrapper" element={<LoginWapper />} />
            <Route path="register">
                <Route index element={<Register />} />
                <Route path="dev" element={<DevRegistrationPage />} />
                <Route path="company" element={<CompanyRegistrationPage />} />
            </Route>
        </Routes>
    )
}

export default PublicRouter;