import CompanyRegistrationPage from "pages/public/Register/Company";
import DevRegistrationPage from "pages/public/Register/Dev";
import Register from "pages/public/Register";
import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import ForgotMyPasswordPage from "../pages/public/ForgotMyPassword/ForgotMyPasswordPage"
import ChangeMyPasswordPage from "pages/public/ChangeMyPassword";
import EmailConfirmPage from "pages/public/EmailConfirm/EmailConfirmPage";
import LoginPage from "pages/public/Login";
import UserProfilePage from "pages/private/UserProfile";
import FeedPage from "pages/private/Feed";


const PublicRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="forgot-my-password" element={<ForgotMyPasswordPage />} />
            <Route path="change-my-password/:token" element={<ChangeMyPasswordPage />} />
            <Route path="register">
                <Route index element={<Register />} />      
                <Route path="dev" element={<DevRegistrationPage />} />
                <Route path="company" element={<CompanyRegistrationPage />} />
            </Route>
            <Route path="email-confirm/:email" element={<EmailConfirmPage />} />

            <Route path="*" element={<Navigate to='/login' replace/>} />
        </Routes>
    )
}

export default PublicRouter;


