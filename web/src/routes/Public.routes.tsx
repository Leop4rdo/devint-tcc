import CompanyRegistrationPage from "pages/public/company/Registration";
import DevRegistrationPage from "pages/public/dev/Registration";
import LoginPage from "pages/public/Login";
import Register from "pages/public/Register";
import React from "react"
import { Routes, Route } from "react-router-dom"
import ForgotMyPasswordPage from "../pages/public/ForgotMyPasswordPage/ForgotMyPasswordPage"


const PublicRouter : React.FC = () => {
    return (
        <Routes>
            <Route index element={<LoginPage />} />
            <Route path="forgot-my-password" element={<ForgotMyPasswordPage />} />
            <Route path="register">
                <Route index element={<Register />} />
                <Route path="dev" element={<DevRegistrationPage />} />
                <Route path="company" element={<CompanyRegistrationPage />} />
            </Route>
        </Routes>
    )
}

export default PublicRouter;


  /* <Route path="change-password" element={<ChangePasswordPage />} */