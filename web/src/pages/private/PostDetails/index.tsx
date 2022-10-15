import React, { useEffect } from "react";
import { SwiperSlide, Swiper } from 'swiper/react'
import Button from "../../../components/shared/Button";
import Icon from "../../../components/shared/Icon";
import MenuWapper from "components/layout/MenuWrapper";
import { Pagination, A11y } from 'swiper'
import { useNavigate, useParams } from "react-router-dom";
import IPost from "interfaces/IPost";
import POSTS_DATA from "../../../DATA/posts-get-response.json"
import { useState } from "react";
import AutoTextArea from "components/shared/TextArea";

const PostDetails: React.FC = () => {
    const { id } = useParams()

    const [post, setPost] = useState<IPost>()

    const navigate = useNavigate()

    useEffect(() => {
        setPost(POSTS_DATA.data.find((post) => post.id == id) as unknown as IPost)
    }, [id])

    console.log(post?.comments)

    return (
        <MenuWapper>
            <div className="container-modal-post">

                <div className="modal-post">
                    <div className="container-itens">

                        <div className="user-info">
                            <div className="dice-user">
                                <img src={post?.writter.profilePicUrl} />
                                <h2>{post?.writter.name}</h2>
                            </div>

                            <Button className="follow-button" children={[<Icon name="add" />, "Seguir"]} />
                        </div>

                        <p>{post?.content}</p>

                        <div className="post-footer">
                            <div className="comment-user">
                                <img src={post?.comments[0].writter.profilePicUrl} />
                                <img className="user-name-comment" src={post?.comments[1].writter.profilePicUrl} />
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
                            <div className="comment">
                                <div className="container-user-dice">
                                    <div className="users-faces-comment"><img src={post?.comments[0].writter.profilePicUrl} alt="" /></div>
                                    <span>Flavin</span>
                                    <AutoTextArea />
                                </div>
                            </div>

                            {
                                
                                    post?.comments.map((comment?) => (

                                        <div className="comment" >
                                            <div className="container-user-dice">
                                                <div className="users-faces-comment"><img src={comment.writter.profilePicUrl} alt="" /></div>
                                                <span>{comment.writter.name}</span>
                                                <p className="text-comment">{comment.content}</p>
                                            </div>
    
                                        </div>
                                    ))
                                


                            }

                        </div>

                    </div>


                    <div className="container-carousel">
                        <Icon name="close" onClick={() => navigate(-1)} />
                        <div className="carousel-image" >

                            <Swiper modules={[Pagination, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                            >


                                {
                                    post?.attachments.map((attachment) => (
                                        <SwiperSlide><img src={attachment} alt="" /></SwiperSlide>
                                    )
                                    )
                                }


                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>

        </MenuWapper >
    )
}

export default PostDetails


