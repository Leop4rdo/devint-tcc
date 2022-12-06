  import MenuWapper from "components/layout/MenuWrapper";
import Post from "components/Post";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as postService from 'services/post.service'
import { IPostListItem } from "interfaces/IPost"
import { Swiper, SwiperSlide } from "swiper/react";
import SideCard from "components/shared/SideCard";
import CreatePostModal from "components/layout/Modals/CreatePostModal";
import IDevMinimal from "interfaces/IDev";
import * as devService from "../../../services/dev.service"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import PostDetailsModal from "components/layout/Modals/PostDetailsModal";
import NewContents from "components/layout/NewContents/NewContents";
import {Link} from "react-router-dom"
interface FeedPageProps {
    feedType : 'random' | 'latest' | 'trending'
}

const FeedPage : React.FC<FeedPageProps> = ({ feedType }) => {
    const [devs, setDevs] = useState<IDevMinimal[]>([])
    const [selectedPostId, setSelectedPostId] = useState('')
    const [writtingPost, setWrittingPost] = useState(false)
    const [posts, setPosts] = useState<IPostListItem[]>([])
    const [loading, setLoading] = useState(true)
    const triggerRef = useRef<HTMLDivElement>(null)

    const getDevs = async () => {
        const res = await devService.list({ limit: 24 })

        setDevs(res.data)
    }

    const getPosts = async () => {
        const { data } = await postService.list({ limit: 48, offset: posts.length, order : feedType || 'random' })

        setPosts([...posts, ...data])
        setLoading(false)
    }

    const refresh = async () => {
        setPosts([])

        const { data } = await postService.list({ limit: 48, offset: 0, order : feedType || 'random'  })

        setPosts(data)
    }

    useEffect(() => { getDevs(); }, [])
    useEffect(() => { refresh() }, [feedType])

    

    return (
        <MenuWapper>
            <div className="feed">
                <div className="feed-components-container">
                    <div className="feed-center">
                        <NewContents 
                        catchphrase="O que você tem para nos dizer hoje?" 
                        newContentName="Novo Post"
                        openCloseModal={() => setWrittingPost(true)}
                        />

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
                                        devs?.map((dev: IDevMinimal) =>
                                            <SwiperSlide key={`${dev.id}-${Math.random() * 999}`}>
                                                <Link className="container-img-devs-highlighted"to={`/dev/${dev?.id}`}>
                                                    <img src={dev.profilePicUrl} /> 
                                                </Link>  
                                            </SwiperSlide>
                                        )}
                                </Swiper>
                            </div>
                            <div className="horizontal-line"></div>
                        </div>

                        <div className="post-container">
                            {
                                
                                posts.map((post: IPostListItem) =>

                                    <>
                                        <Post key={`${post.id}-${Math.random() * 999}`} data={post} openDetails={() => {
                                            setSelectedPostId(post.id)
                                            getPosts()
                                        }} />
                                    </>
                                )
                            }
                            {
                                posts.length > 45 ? 
                                    <div id="scroll-observer" onClick={getPosts} ref={triggerRef}>Ver mais</div> :
                                    ''
                            }
                        </div>
                    </div>
                </div>
            </div>


            {
                selectedPostId &&
                <PostDetailsModal  postId={selectedPostId} onClick={() => setSelectedPostId('')} refreshComment={refresh} />
            }

            {
                writtingPost &&
                <CreatePostModal onClose={() =>  { setWrittingPost(false); refresh()}}  />
            }
        </MenuWapper>
    );
}

export default FeedPage
