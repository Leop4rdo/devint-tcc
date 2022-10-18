import MenuWapper from "components/layout/MenuWrapper";
import Post from "components/Post";
import IPost from "interfaces/IPost";
import React, { useEffect, useState } from "react";
import * as postService from 'services/post.service'
import IPostListItem from "interfaces/IPost";
import POSTS_DATA from "../../../DATA/posts-get-response.json"
import NewPost from "components/shared/NewPost";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import SideCard from "components/shared/SideCard";

const FeedPage: React.FC = () => {

    const [ posts, setPosts] = useState<IPostListItem[]>([])
  
    const getPosts = async () => {
        const { data } =  await postService.list({ offset : posts.length, limit : 48 })
        
        setPosts([...posts, ...data ])
    }

    useEffect(() => { getPosts() }, []) 
    
    return (
        <MenuWapper>
            <div className="feed" >
                <div className="feed-components-container">
                    <div className="feed-center">
                        <NewPost />
                        <div className="outstanding-container">
                            <h2>Devs em destaque</h2>
                            <div className="outstanding-users">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={10}
                                    navigation
                                    slidesPerGroup={10}>
                                

                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>
                                    <SwiperSlide ><img alt="" src="https://avatars.githubusercontent.com/u/5909549?v=4" /></SwiperSlide>

                                </Swiper>

                            </div>
                        </div>

                        <div className="post-container">
                            {
                                posts.map((post: IPost) =>
                                    <Post key={`${post.id}-${Math.random()*999}`} data={post} />
                                    
                                )
                            }
                        </div>
                    </div>

                    <div className="side-card-container">
                        <SideCard title="Seguindo" >
                            <a href=""><img alt=""src="https://avatars.githubusercontent.com/u/5909549?v=4" />username123</a>
                            <a href=""><img alt=""src="https://avatars.githubusercontent.com/u/5909549?v=4" />username123</a>
                            <a href=""><img alt=""src="https://avatars.githubusercontent.com/u/5909549?v=4" />username123</a>
                            <a href=""><img alt=""src="https://avatars.githubusercontent.com/u/5909549?v=4" />username123</a>
                            <a href=""><img alt=""src="https://avatars.githubusercontent.com/u/5909549?v=4" />username123</a>
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
            </div>


    
               
        </MenuWapper>
    );
}

export default FeedPage
