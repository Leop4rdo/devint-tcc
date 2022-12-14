import { IPost } from "interfaces/IPost"
import React, { useState, useEffect, useContext } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import * as postService from 'services/post.service'
import { SwiperSlide, Swiper } from "swiper/react"
import Button from "components/shared/Button"
import Icon from "components/shared/Icon"
import Comment from "components/shared/Comment"
import { AuthContext } from "store/context/Auth.context"
import Input from "components/shared/Input";
import AutoTextArea from "components/shared/AutogrowTextArea";
import * as devService from "services/dev.service";

interface IPostDetailsModalProps {
    postId: string
    onClick: any
    refreshComment: any

}

const PostDetailsModal: React.FC<IPostDetailsModalProps> = ({ postId, onClick, refreshComment }) => {
    const authContext = useContext(AuthContext)
    const [following, setFollowing] = useState(false);
    const [post, setPost] = useState<IPost>()
    const [newComment, setNewComment] = useState({
        content: ''
    })

    const getPost = async () => {
        const { data } = await postService.findById(postId)
        setPost(data)
    }

    const addComment = async () => {
        if (!post) return

        const res = await postService.addComment(newComment, postId)

        if (res.hasError !== false)
            return alert('Erro ao postar commentario!')

        setNewComment({ content: '' })

        getPost()
        refreshComment()
    }

    const [liked, setLiked] = useState(post?.alreadyHearted)

    const giveLike = async () => {
        await postService.addHeart(`${post?.id}`)

        setLiked(!liked)
    }

     const toggleFollow = async () => {
        if (!authContext?.userData?.id) return
        await devService.toggleFollow(authContext?.userData?.id)
        setFollowing(!following);
    } 
    useEffect(() => { getPost() }, [postId])

    return (
        <div className="modal-wrapper">
            <div className="container-modal-post">
                <div className="modal-post">
                    <div className="container-itens">
                        <div className="user-informations">
                            <div className="dice-user">
                                <img src={post?.writter.profilePicUrl} />
                                <h2>{post?.writter.name}</h2>
                            </div>

                            <div className="dice-user">
                                {
                                    (authContext?.userData?.id !== authContext?.userData?.id) ?
                                    <Button className="follow-button" children={[<Icon name="add" />, "Seguir"]}  onClick={toggleFollow} />
                                    : ''
                                }
                                


                                {post?.attachments === undefined || post?.attachments.length === 0 &&
                                    <div className="container-icon-close">
                                        <Icon className="close" name="close" onClick={onClick} />
                                    </div>

                                }

                            </div>
                        </div>

                        <p className="content">{post?.content}</p>

                        <div className="post-footer">
                            <div className="comment-user">

                                <span>{post?.commentAmount} Comentarios</span>
                            </div>

                            <div className="hearts">
                                <p>{
                                    (liked && !post?.alreadyHearted) ? post?.hearts! + 1 : (!liked && post?.alreadyHearted) ? post?.hearts! - 1 : post?.hearts!
                                }</p>
                                <Button onClick={giveLike}>
                                    <Icon name="favorite" id={`${liked ? 'already-hearted' : ''}`} />
                                </Button>
                            </div>
                        </div>

                        <div className="container-comments">
                            <div className="new-comment-container">
                                <div className="profile">
                                    <img src={authContext?.userData.profilePicUrl} />
                                </div>
                                <AutoTextArea value={newComment.content} onChange={(e) => setNewComment({ ...newComment, content: e.target.value })} />
                                <Icon name="send" onClick={addComment} />
                            </div>

                            {
                                post?.comments.sort((a, b) => a.hearts > b.hearts ? 1 : -1).map((comment?) => (
                                    <Comment refresh={getPost} data={comment} key={postId} />
                                ))

                            }
                        </div>
                    </div>

                    {
                        post?.attachments != undefined && post?.attachments.length > 0 &&
                        <div className="container-carousel">
                            <Icon name="close" onClick={onClick} />
                            <div className="carousel-image" >

                                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation={post.attachments.length > 1 ? true : false}
                                    pagination={{ clickable: true }}
                                >
                                    {
                                        post?.attachments.map((attachment, index) =>
                                            <SwiperSlide><img src={attachment} alt="" key={`${index}`} /></SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PostDetailsModal
