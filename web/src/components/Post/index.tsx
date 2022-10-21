import React, { useState } from "react"
import Button from "../shared/Button";
import Icon from "../shared/Icon";
import { Swiper, SwiperSlide } from "swiper/react"
import { useNavigate } from "react-router-dom";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import {IPostListItem, IPost} from "interfaces/IPost";
import * as postService from "../../services/post.service"

interface IPostProps {
    data: IPostListItem
    openDetails: () => void

}

const Post: React.FC<IPostProps> = ({ data , openDetails}) => {

   

    const [liked, setLiked] = useState(data.alreadyHearted)

    const giveLike = async () => {
       await postService.addHeart(data.id)

        setLiked(!liked)
    }
    
    return (
        <div className="postcard" key={data.id} >
            <div className="post-header">
                <div className="user-info">
                    <img src={data.writter.profilePicUrl} />
                    <h2>{data.writter.name}</h2>
                </div>
                <Button className="follow-button" children={[<Icon name="add" />, "Seguir"]} />
            </div>

            <div className="post-content" onClick={openDetails}>
                <p>{data.content}</p>
                <div className="post-images">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                            {
                                data.attachments.map((attachment) => (
                                    <SwiperSlide key={`${data.id}-${Math.random()*999}`}><img src={attachment} alt="" /></SwiperSlide>
                                )
                                )
                            }
                        
                    </Swiper>

                </div>
            </div>

            <div className="horizontal-line"></div>
            
            <div className="post-footer">
                <div className="comments">
                    {data.comments}
                    <span onClick={openDetails}>comentários</span>
                </div>
                <div className="hearts">
                    {
                        (liked && !data.alreadyHearted) ? data.hearts + 1 : (!liked && data.alreadyHearted) ? data.hearts - 1 : data.hearts
                    }
                    <Button onClick={giveLike}>
                        <Icon name="favorite" id={`${liked ? 'already-hearted' : ''}`} />
                    </Button>
                </div>
            </div>
        </div>
    );



}

// passo 1 -> pegar o array
// passo 2 -> quebrar o array nos 3 primeiros index
// passo 3 -> mapear os 3 primeiros index para uma <img>2

export default Post;