import { IPost } from "interfaces/IPost"
import React, { useState, useEffect } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import * as postService from 'services/post.service'
import { SwiperSlide, Swiper } from "swiper/react"
import Button from "components/shared/Button"
import CreateComment from "components/shared/CreateComment"
import Icon from "components/shared/Icon"
import Comment from "components/shared/Comment"



interface IPostDetailsModalProps {
    postId: string
    onClick: any
}

const PostDetailsModal: React.FC<IPostDetailsModalProps> = ({ postId, onClick }) => {

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
                                {post?.attachments === undefined || post?.attachments.length === 0 &&
                                    <Icon className="icon-close" name="close" onClick={onClick} />
                                }
                                
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
                            <CreateComment />
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
                            <Icon className="icon-close" name="close" onClick={onClick} />
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
