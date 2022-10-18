
import Comment from "components/shared/Comment";
import CreateComment from "components/shared/CreateComment";
import ModalWrapper from "../ModalWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import Button from "../../../shared/Button";
import Icon from "components/shared/Icon";
import React, { useEffect, useState } from "react";
import IPostListItem from "interfaces/IPost";
import * as postService from 'services/post.service'

interface IModalPostProps {
    postId: string
    onClick: any
}

const ModalPost: React.FC<IModalPostProps> = ({ postId, onClick }) => {

    const [post, setPost] = useState<IPostListItem | null>(null)

    const getPost = async () => {
        const { data } = await postService.findById(postId)
        setPost(data)
    }

    useEffect(() => { getPost() }, [postId])


    console.log(post?.comments)



    return (
        <ModalWrapper >


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
                                {
                                    //Fazer validação das imagens aquiii
                                }
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
                        <Icon name="close" onClick={onClick} />
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



        </ModalWrapper>

    )
}

export default ModalPost