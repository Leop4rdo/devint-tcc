import MenuWapper from "components/layout/MenuWrapper";
import Feed from "pages/private/Feed";
import React from "react"
import { Route, Routes } from "react-router-dom"
import PostDetailsPage from "pages/private/PostDetails"

const PrivateRouter: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Feed />}/>
            <Route path="posts/:id" element={<PostDetailsPage />} />
        </Routes>
    );
}

export default PrivateRouter;
