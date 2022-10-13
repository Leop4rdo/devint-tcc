import CompanyRegistrationPage from "pages/public/Register/Company";
import DevRegistrationPage from "pages/public/Register/Dev";
import LoginPage from "pages/public/Login";
import Register from "pages/public/Register";
import React from "react"
import { Route, Routes } from "react-router-dom"
import ForgotMyPasswordPage from "../pages/public/ForgotMyPassword/ForgotMyPasswordPage"
import ChangeMyPasswordPage from "pages/public/ChangeMyPassword";
import EmailConfirmPage from "pages/public/EmailConfirm/EmailConfirmPage";
import Feed from "pages/private/Feed";
import PostDetailsPage from "pages/private/PostDetails"

const PublicRouter: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Feed />} />
            <Route path="posts/:id" element={<PostDetailsPage />} />
            <Route path="forgot-my-password" element={<ForgotMyPasswordPage />} />
            <Route path="change-my-password/:token" element={<ChangeMyPasswordPage />} />
            <Route path="register">
                <Route index element={<Register />} />
                <Route path="dev" element={<DevRegistrationPage />} />
                <Route path="company" element={<CompanyRegistrationPage />} />
            </Route>
            <Route path="email-confirm/:email" element={<EmailConfirmPage />} />
        </Routes>
    )
}

export default PublicRouter;


/* <Route path="change-password" element={<ChangePasswordPage />} */
