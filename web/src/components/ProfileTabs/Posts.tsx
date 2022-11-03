import Post from "components/Post"
import { IPostListItem } from "interfaces/IPost"
import React, { useEffect, useState } from "react"
import { getPosts } from "services/post.service"
import * as postService from "../../services/post.service"

interface IPostsTab {
    props : any
}

const PostsTab: React.FC<IPostsTab> = () => {

    const [posts, setPosts] = useState<IPostListItem[]>([])

    const getPosts = async () => {
        const { data } = await postService.list({ limit: 45, offset: posts.length })

        setPosts([...posts, ...data])
    }

    useEffect(() => { getPosts(); }, [])

    return (

        <div className="post-container">
                            {
                                posts.map((post: IPostListItem) =>
                                    <>
                                        <Post key={`${post.id}-${Math.random() * 999}`} data={post} openDetails={() => {}} />
                                    </>
                                )
                            }
                           
                        </div>
    )
    
}

export default PostsTab;