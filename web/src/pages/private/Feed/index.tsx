import MenuWapper from "components/layout/MenuWrapper";
import ModalPost from "pages/private/ModalPost";
import Post from "components/Post";
import IPost from "interfaces/IPost";
import React, { useEffect, useState } from "react";  
import * as postService from 'services/post.service'
import IPostListItem from "interfaces/IPost";
import NewPost from "components/shared/NewPost";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

const FeedPage: React.FC = () => {
    
    const [posts, setPosts] = useState<IPostListItem[]>([]);

    const getPosts = async () => {
        const { data } = await postService.list({ offset : posts.length, limit : 48 })

        setPosts([...posts, ...data])
    }

    useEffect(() => { getPosts() }, [])
    
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

            </div>
        </MenuWapper>
    );
}

export default FeedPage