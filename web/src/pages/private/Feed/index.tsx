import Post from "components/shared/Post";
import IPost from "interfaces/IPost";
import React, { useEffect, useState } from "react";  
import POSTS_DATA from "../../../DATA/posts-get-response.json"


const Feed: React.FC = () => {



    const [posts, setPosts] = useState<IPost[]>(POSTS_DATA.data as unknown as IPost[]);
    
    console.log(posts);
    return (
        <div className="feed">
            <div>
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
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                    <img src="https://avatars.githubusercontent.com/u/5909549?v=4" />
                </div>
            </div>
            {
                posts.map((post : IPost) => 
                    <Post data={post} />
                )
            }
        </div>
    );
}

export default Feed