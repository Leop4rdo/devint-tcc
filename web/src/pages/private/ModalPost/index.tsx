import React, { useEffect } from "react";
import { SwiperProps, SwiperSlide, Swiper } from 'swiper/react'
import Button from "../../../components/shared/Button";
import Icon from "../../../components/shared/Icon";
import InputComment from "../../../components/shared/Input";
import MenuWapper from "components/layout/MenuWrapper";
import { Pagination, A11y } from 'swiper'
import { useNavigate, useLocation, useParams } from "react-router-dom";
import IPost from "interfaces/IPost";
import POSTS_DATA from "../../../DATA/posts-get-response.json"
import { useState } from "react";
import Comment from "components/shared/Comment";
import IComment from "interfaces/IComment";




const ModalPost: React.FC = () => {
    const { id } = useParams()

    const [post, setPost] = useState<IPost>()

    console.log(post?.attachments)

    const navigate = useNavigate()

    useEffect(() => {
        setPost(POSTS_DATA.data.find((post)=> post.id == id ) as unknown as IPost)
    }, [id])

    return (
        <MenuWapper>
            <div className="container-modal-post">

                <div className="modal-post">
                    <div className="container-itens">

                        <div className="user-info">

                            <div className="dice-user">
                                <div className="user-face"><img></img></div>
                                <h2>Name user</h2>
                            </div>

                            <Button className="follow-button" children={[<Icon name="add" />, "Seguir"]} />
                        </div>

                        <p>loremipsumaskdçlaskjlkdjsalkjdlasjklads</p>

                        <div className="post-footer">
                            <div className="comment-user">
                                <div className="users-faces"><img></img></div>
                                <span>10 Comentarios</span>
                            </div>

                            <div className="hearts">
                                <Button>
                                    <Icon name="favorite" />
                                </Button>
                            </div>
                        </div>


                        <div className="container-comments">
                            <div className="comment">
                                <div className="users-faces-comment"><img></img></div>
                                <span>Flavin</span>
                                <InputComment placeholder="Escreva um comentário..." icon="send" />
                                

                            </div>
                            <div className="comment">
                                <div className="users-faces-comment"><img></img></div>
                                <span>Flavin</span>
                            </div>
                            <div className="comment">
                                <div className="users-faces-comment"><img></img></div>
                                <span>Flavin</span><textarea></textarea>

                            </div>

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
                                    post?.attachments.map((attachment , index) => (
                                        <SwiperSlide><img src={attachment} alt="" /></SwiperSlide>
                                    )
                                    )
                                }
                            

                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>

        </MenuWapper>
    )
}

export default ModalPost


/* {
    posts.map((post : IPost , index) => 
    <SwiperSlide><img key={index} src={post.attachments[0]}/></SwiperSlide>
    ) 
  }    */