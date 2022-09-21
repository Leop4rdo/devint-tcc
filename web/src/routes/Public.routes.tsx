import CompanyRegistrationPage from "pages/public/Register/Company";
import DevRegistrationPage from "pages/public/Register/Dev";
import LoginPage from "pages/public/Login";
import Register from "pages/public/Register";
import React from "react"
import { Routes, Route } from "react-router-dom"
import ForgotMyPasswordPage from "../pages/public/ForgotMyPassword/ForgotMyPasswordPage"
import ChangeMyPasswordPage from "pages/public/ChangeMyPassword";


const PublicRouter : React.FC = () => {
    return (
        <Routes>
            <Route index element={<LoginPage />} />
            <Route path="forgot-my-password" element={<ForgotMyPasswordPage />} />
            <Route path="change-my-password" element={<ChangeMyPasswordPage />} />
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