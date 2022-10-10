import IPost from "interfaces/IPost";
import React, { useState } from "react"
import Button from "../shared/Button";
import Icon from "../shared/Icon";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react"

import 'swiper/css';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
interface IPostProps {
    data: IPost
}

const Post: React.FC<IPostProps> = ({ data }) => {

    return (
        <div className="postcard" key={data.id}>
            <div className="post-header">
                <div className="user-info">
                    <img src={data.writter.profilePicUrl} />
                    <h2>{data.writter.name}</h2>
                </div>
                <Button className="follow-button" children={[<Icon name="add" />, "Seguir"]} />
            </div>

            <div className="post-content">
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
                                data.attachments.map((attachment) => 
                                <SwiperSlide><img src={attachment}/></SwiperSlide>
                                )
                            }
                        
                    </Swiper>
                    
                </div>
            </div>
            <div className="post-footer">
                <div className="comments">
                    <img src={data.comments[0].writter.profilePicUrl} />
                    <img src={data.comments[1].writter.profilePicUrl} />
                    <span>10 comentários</span>
                </div>
                <div className="hearts">
                    {data.hearts}
                    <Button>
                        <Icon name="favorite" />
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