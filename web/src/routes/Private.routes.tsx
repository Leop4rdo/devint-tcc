import MenuWapper from "components/layout/MenuWrapper";
import FeedPage from "pages/private/Feed";
import React from "react"
import { Route, Routes } from "react-router-dom"
import PagePostDetailsPage from "pages/private/ModalPost"

const PrivateRouter: React.FC = () => {
    return (
        <Routes>
            <Route index element={<FeedPage />} />
            <Route path="posts/:id" element={<PagePostDetailsPage />} />
        </Routes>
    );
}

export default PrivateRouter;
