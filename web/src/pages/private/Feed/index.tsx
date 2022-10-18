import MenuWapper from "components/layout/MenuWrapper";
import Post from "components/Post";
import React, { useEffect, useState } from "react";
import * as postService from 'services/post.service'
import {IPostListItem, IPost} from "interfaces/IPost";
import POSTS_DATA from "../../../DATA/posts-get-response.json"
import { Swiper, SwiperSlide } from "swiper/react";
import SideCard from "components/shared/SideCard";

import Button from "components/shared/Button";
import CreatePostModal from "components/Modals/CreatePostModal";

import IDevMinimal from "interfaces/IDev";
import * as devService from "../../../services/dev.service" 

const FeedPage: React.FC = () => {
    const [devs, setDevs] = useState<IDevMinimal[]>([])
    const [selectedPostId, setSelectedPostId] = useState('')
    const [ writtingPost, setWrittingPost ] = useState(false)
    const [ posts, setPosts] = useState<IPostListItem[]>([])

    const getDevs= async () => {
        
        const res = await devService.list({limit : 20})

        setDevs(res.data)
    }

    const getPosts = async () => {
        const { data } =  await postService.list({ offset : posts.length, limit : 999 })
        
        setPosts([...posts, ...data ])
    }

    useEffect(() => { getPosts(); getDevs() }, []) 

     


    return (
        <MenuWapper>
            <div className="feed" >
                <div className="feed-components-container">
                    <div className="feed-center">
                        <div className="new-post">
                            <span>O que você tem para nos dizer hoje?</span>
                            <button className="btn-primary" onClick={() => setWrittingPost(true)}>Novo Post</button>
                        </div>

                        <div className="outstanding-container">
                            <h2>Devs em destaque</h2>
                            <div className="outstanding-users">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={10}
                                    navigation
                                    slidesPerGroup={10}>
                                

                                        {
                                            devs?.map((dev) =>
                                            <SwiperSlide><img src={dev.profilePicUrl} /></SwiperSlide>
                                        )}
                                
                                </Swiper>

                            </div>
                        </div>

                        <div className="post-container">
                            {
<<<<<<< HEAD
                                posts.map((post: IPost) => (
                                    <Post data={post} onClick={() => setSelectedPostId(post.id)} />
                                )
                                   
=======
                                posts.map((post: IPostListItem) =>
                                    <Post key={`${post.id}-${Math.random()*999}`} data={post} />
>>>>>>> 656a4e791a525b283d56b44bd2a085568d353156
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
<<<<<<< HEAD


            {
                selectedPostId &&
                <ModalPost postId={selectedPostId} onClick={() => setSelectedPostId('')} />
            }

=======
            {
                writtingPost &&
                <CreatePostModal onClose={() => setWrittingPost(false)}/>
            }
>>>>>>> 656a4e791a525b283d56b44bd2a085568d353156
        </MenuWapper>
    );
}

export default FeedPage
