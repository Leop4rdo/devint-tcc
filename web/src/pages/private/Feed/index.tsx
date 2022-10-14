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

    const [posts, setPosts] = useState<IPost[]>(POSTS_DATA.data as unknown as IPost[]);

    /*  const getPosts = async () => {
         const { data } = await postService.list({ offset : posts.length, limit : 48 })
 
         setPosts([...posts, ...data])
     } */

    /* useEffect(() => { getPosts() }, []) */

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

                {
                    posts.map((post: IPost) =>
                        <Post data={post} />

                    )
                }

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
        </MenuWapper>
    );
}

export default FeedPage