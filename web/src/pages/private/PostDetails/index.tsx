import React, { useEffect } from "react";
import { SwiperSlide, Swiper } from 'swiper/react'
import Button from "../../../components/shared/Button";
import Icon from "../../../components/shared/Icon";
import MenuWapper from "components/layout/MenuWrapper";

import { useNavigate, useParams } from "react-router-dom";
import IPost from "interfaces/IPost";
import POSTS_DATA from "../../../DATA/posts-get-response.json"
import { useState } from "react";
import Comment from "components/shared/Comment";
import CreateComment from "components/shared/CreateComment";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";


const PostDetails: React.FC = () => {
    const { id } = useParams()

    const [post, setPost] = useState<IPost>()

    const navigate = useNavigate()

    useEffect(() => {
        setPost(POSTS_DATA.data.find((post) => post.id == id) as unknown as IPost)
    }, [id])

    console.log(post)

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

                        <p className="content">{post?.content}</p>

                        <div className="post-footer">
                            <div className="comment-user">
                                <img src={post?.comments[0].writter.profilePicUrl} />
                                <img src={post?.comments[1].writter.profilePicUrl} />
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


                    <div className="container-carousel">
                        <Icon name="close" onClick={() => navigate(-1)} />
                        <div className="carousel-image" >

                            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
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


