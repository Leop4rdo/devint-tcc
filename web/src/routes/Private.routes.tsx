
import FeedPage from "pages/private/Feed";
import UserProfilePage from "pages/private/UserProfile";
import React from "react"
import { Route, Routes } from "react-router-dom"


const PrivateRouter: React.FC = () => {
    return (
        <Routes>
            <Route index element={<FeedPage />}/>
            <Route path="dev/:devId" element={<UserProfilePage /    >} />
            <Route path="/devs/:userId/posts" />
        </Routes>
    );
}

export default PrivateRouter;
