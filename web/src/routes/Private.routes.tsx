
import PostsTab from "components/ProfileTabs/Posts/Posts";
import FeedPage from "pages/private/Feed";
import UserProfilePage from "pages/private/UserProfile";
import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import ProjectDetails from "../pages/private/ProjectDetails";


const PrivateRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/feed"  element={<FeedPage feedType="random"/>}/>
            <Route path="/feed/latest"  element={<FeedPage feedType="latest" />}/>
            <Route path="/feed/trending"  element={<FeedPage feedType="trending"/>}/>
            <Route path="/dev/projectdetails/:IdProject" element={<ProjectDetails/>} />
            <Route path="dev/:devId" element={<UserProfilePage />} />
            <Route path="/devs/:userId/posts" element={<PostsTab devId="" />} />
            <Route path="*" element={<Navigate to='/feed' replace/>} />
        </Routes>
    );
}

export default PrivateRouter;
