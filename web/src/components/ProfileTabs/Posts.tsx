import Post from "components/Post"
import { IPostListItem } from "interfaces/IPost"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as postService from "../../services/post.service"

interface IPostsTab {
    devId : string
}

const PostsTab: React.FC<IPostsTab> = ({ devId }) => {


    const [posts, setPosts] = useState<IPostListItem[]>([])

    const getPosts = async () => {
        if (!devId) return 
        const { data } = await postService.getPostsByUser(devId)

        setPosts([...posts, ...data])

        console.log(posts);
        
    }

    useEffect(() => { getPosts(); }, [])

    return (
        
        <div className="post-container">
            {
                posts.map((post: IPostListItem) =>
                    <>
                        <Post key={`${post.id}-${Math.random() * 999}`} data={post} openDetails={() => { }} />
                    </>
                )
            }
        </div>
        
    )

}

export default PostsTab;