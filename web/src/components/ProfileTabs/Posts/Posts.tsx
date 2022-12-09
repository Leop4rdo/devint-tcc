import CreatePostModal from "components/layout/Modals/CreatePostModal"
import NewContents from "components/layout/NewContents/NewContents"
import Post from "components/Post"
import { IPostListItem } from "interfaces/IPost"
import React, { useEffect, useState } from "react"

import * as postService from "../../../services/post.service"
import PostDetailsModal from "components/layout/Modals/PostDetailsModal";
interface IPostsTab {
    devId: string
}

const PostsTab: React.FC<IPostsTab> = ({ devId }) => {

    const [writtingPost, setWrittingPost] = useState(false)
    const [posts, setPosts] = useState<IPostListItem[]>([])
    const [selectedPostId, setSelectedPostId] = useState('')

    const getPosts = async () => {
        if (!devId) return
        const { data } = await postService.getPostsByUser(devId)

        setPosts([...posts, ...data])

    }

    const refresh = async () => {
        setPosts([])

        const { data } = await postService.list({ limit: 48, offset: 0 })

        setPosts(data)
    }

    //useEffect(() => { refresh() })

    useEffect(() => { getPosts(); refresh() }, [])

    return (
        <>
            <NewContents
                catchphrase="O que você tem para nos dizer hoje?"
                newContentName="Novo Post"
                openCloseModal={() => setWrittingPost(true)}
            />
            
            <div className="post-container">

                {
                    posts.map((post: IPostListItem) =>
                        <>
                            <Post key={`${post.id}-${Math.random() * 999}`} data={post} openDetails={() => setSelectedPostId(post.id)} />
                        </>
                    )
                }

                {
                    writtingPost &&
                    <CreatePostModal onClose={() => { setWrittingPost(false); refresh() }} />
                }


                {
                    selectedPostId &&
                    <PostDetailsModal postId={selectedPostId} onClick={() => setSelectedPostId('')} refreshComment={refresh} />
                }

            </div>


        </>




    )

}

export default PostsTab;


