import Post from "components/shared/Post";
import IPost from "interfaces/IPost";
import React, { useEffect, useState } from "react";  
import POSTS_DATA from "../../../DATA/posts-get-response.json"


const Feed: React.FC = () => {

    
    
    const [posts, setPosts] = useState<IPost[]>(POSTS_DATA.data as unknown as IPost[]);
    
    console.log(posts);
    return (
        <div className="feed">
            {
                posts.map((post : IPost) => 
                    <Post data={post} />
                )
            }
        </div>
    );
}

export default Feed