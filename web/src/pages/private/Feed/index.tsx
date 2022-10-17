import MenuWapper from "components/layout/MenuWrapper";
import Post from "components/Post";
import IPost from "interfaces/IPost";
import React, { useEffect, useState } from "react";
import * as postService from 'services/post.service'
import IPostListItem from "interfaces/IPost";
import Button from "../../../components/shared/Button";
import POSTS_DATA from "../../../DATA/posts-get-response.json"
import NewPost from "components/shared/NewPost";
import { Swiper, SwiperSlide } from "swiper/react";
import SideCard from "components/shared/SideCard";
import Modal from "components/layout/Modal";
import Comment from "components/shared/Comment";
import CreateComment from "components/shared/CreateComment";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

const FeedPage: React.FC = () => {

    const [posts, setPosts] = useState<IPost[]>(POSTS_DATA.data as unknown as IPost[]);

    const [isModalVisible, setModalVisible] = useState(false)

    

    /*  const [posts, setPosts] = useState<IPostListItem[]>([])
 
     const getPosts = async () => {
          const { data } = await postService.list({ offset : posts.length, limit : 48 })
  
          setPosts([...posts, ...data])
      }
 
     useEffect(() => { getPosts() }, []) */

     


    return (
        <MenuWapper>
            <div className="feed" >
                <NewPost />
                <div className="outstanding-container">
                    <h2>Devs em destaque</h2>
                    <div className="outstanding-users">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={10}
                            navigation
                            pagination={{ clickable: true }}>

                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                            <SwiperSlide><img src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>

                        </Swiper>

                    </div>
                </div>

                <div className="post-container">
                    {
                        posts.map((post: IPost) =>

                            <Post data={post} onClick={() => Teste(posts?.id)} />
                            
                            
                                    

                        )
                    }
                </div>


                <div className="side-card-container">
                    <SideCard title="Seguindo" >
                        <a href=""><img src="https://avatars.githubusercontent.com/u/5909549?v=4" />username123</a>
                        <a href=""><img src="https://avatars.githubusercontent.com/u/5909549?v=4" />username123</a>
                        <a href=""><img src="https://avatars.githubusercontent.com/u/5909549?v=4" />username123</a>
                        <a href=""><img src="https://avatars.githubusercontent.com/u/5909549?v=4" />username123</a>
                        <a href=""><img src="https://avatars.githubusercontent.com/u/5909549?v=4" />username123</a>
                    </SideCard>
                    <SideCard title="Artigos em alta">
                        <a>Stop complaining about PHP</a>
                        <a>Start your React App</a>
                        <a>Improve your CSS Skills</a>
                        <a>Development Performance</a>
                    </SideCard>
                    <SideCard title="Meus grupos">
                        <a>Juninhos</a>
                        <a>Um empreguinho por favor</a>
                    </SideCard>
                </div>

            </div>


            {isModalVisible &&
                <Modal>
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

                </Modal>

            }

        </MenuWapper>
    );
}

export default FeedPage