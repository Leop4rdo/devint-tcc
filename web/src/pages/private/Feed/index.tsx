import MenuWapper from "components/layout/MenuWrapper";
import ModalPost from "pages/private/ModalPost";
import Post from "components/Post";
import IPost from "interfaces/IPost";
import React, { useEffect, useState } from "react";  
import * as postService from 'services/post.service'
import IPostListItem from "interfaces/IPost";

const Feed: React.FC = () => {
    
    const [posts, setPosts] = useState<IPostListItem[]>([]);

    const getPosts = async () => {
        const { data } = await postService.list({ offset : posts.length, limit : 48 })

        setPosts([...posts, ...data])
    }

    useEffect(() => { getPosts() }, [])
    
    return (
        <MenuWapper>
        <div className="feed" >
            <div className="outstanding-container">
                <h2>Devs em destaque</h2>
                <div className="outstanding-users">
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                </div>
            </div>

            {posts.map((post) => 
                <Post data={post} />
            )}
        </div>
        </MenuWapper>
    );
}

export default Feed