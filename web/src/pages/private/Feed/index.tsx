import MenuWapper from "components/layout/MenuWrapper";
import ModalPost from "pages/private/ModalPost";
import Post from "components/Post";
import IPost from "interfaces/IPost";
import React, { useEffect, useState } from "react";
import POSTS_DATA from "../../../DATA/posts-get-response.json"
import SideCard from "components/shared/SideCard";
import Icon from "components/shared/Icon";
import NewPost from "components/shared/NewPost";

const FeedPage: React.FC = () => {

    const [posts, setPosts] = useState<IPost[]>(POSTS_DATA.data as unknown as IPost[]);

    console.log(posts);
    return (
        <MenuWapper>
            <div className="feed" >
                <NewPost />
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

                {
                    posts.map((post: IPost) =>
                        <Post data={post} />
                    )
                }

            </div>
        </MenuWapper>

    );
}

export default FeedPage