import { IPost } from "interfaces/IPost"
import React, { useState, useEffect, useContext } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import * as postService from 'services/post.service'
import { SwiperSlide, Swiper } from "swiper/react"
import Button from "components/shared/Button"
import Icon from "components/shared/Icon"
import Comment from "components/shared/Comment"
import { AuthContext } from "store/context/Auth.context"
import Input from "components/shared/Input"
import AutoTextArea from "components/shared/TextArea"
interface IPostDetailsModalProps {
    postId: string
    onClick: any
}

const PostDetailsModal: React.FC<IPostDetailsModalProps> = ({ postId, onClick }) => {
    const authContext = useContext(AuthContext)

    const [post, setPost] = useState<IPost | null>(null)

    const getPost = async () => {
        const { data } = await postService.findById(postId)
        setPost(data)
    }

    useEffect(() => { getPost() }, [postId])

    return (
        <div className="modal-wrapper">
            <div className="container-modal-post">
                <div className="modal-post">
                    <div className="container-itens">
                        <div className="user-info">
                            <div className="dice-user">
                                <img src={post?.writter.profilePicUrl} />
                                <h2>{post?.writter.name}</h2>
                            </div>

                            <div className="dice-user">
                                <Button className="follow-button" children={[<Icon name="add" />, "Seguir"]} />
                                <Icon name="close" onClick={onClick} />
                            </div>
                        </div>

                        <p className="content">{post?.content}</p>

                        <div className="post-footer">
                            <div className="comment-user">

                                <span>{post?.comments.length} Comentarios</span>
                            </div>

                            <div className="hearts">
                                <p>{post?.hearts}</p>
                                <Button>
                                    <Icon name="favorite" />
                                </Button>
                            </div>
                        </div>

                        <div className="container-comments">
                            <div className="new-comment-container">
                                <div className="profile">
                                    <img src={authContext?.userData.profilePicUrl} />
                                </div>
                                <AutoTextArea />
                                <Icon name="send" />
                            </div>
                            
                            {
                                post?.comments.map((comment?) => (
                                    <Comment data={comment} />
                                ))

                            }
                        </div>
                    </div>
                    
                    {
                        post?.attachments != undefined && post?.attachments.length > 0 &&
                        <div className="container-carousel">
                            <div className="carousel-image" >

                                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                >
                                    {
                                        post?.attachments.map((attachment) => 
                                            <SwiperSlide><img src={attachment} alt="" /></SwiperSlide>
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
