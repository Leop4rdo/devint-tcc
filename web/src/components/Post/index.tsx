import React, { useState } from "react"
import Button from "../shared/Button";
import Icon from "../shared/Icon";
import { Swiper, SwiperSlide } from "swiper/react"
import { Link, useNavigate } from "react-router-dom";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { IPostListItem, IPost } from "interfaces/IPost";
import * as postService from "../../services/post.service"
import * as devService from "../../services/dev.service"

interface IPostProps {
    data: IPostListItem
    openDetails: () => void

}

const Post: React.FC<IPostProps> = ({ data, openDetails }) => {

    

    const [liked, setLiked] = useState(data.alreadyHearted)

    const giveLike = async () => {
        await postService.addHeart(data.id)

        setLiked(!liked)
    }

    

    return (
        <div className="postcard" key={data.id} >
            <div className="post-header">
                <Link to={`/dev/${data.writter.id}`} className="user-informations" >
                    <img src={data.writter.profilePicUrl} />
                    <div className="flex-vertical-container">
                        <h3>{data.writter.name}</h3>
                        <span className="github">{data.writter.githubUsername}</span>
                    </div>  
                </Link>
            </div>

            <div className="post-content" >
                <p onClick={openDetails}>{data.content}</p>
                {
                    data.project &&
                    <Link to='/dev/projectdetails'>&#60; {data.project.name} /&#62;</Link>
                }
                {   
                    data.attachments.length > 0 &&
                    <div className="post-images">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation={data.attachments.length > 1 ? true : false}
                            pagination={{ clickable: true }}
                            onClick={openDetails}
                        >
                            {
                                data.attachments.map((attachment) => 
                                    <SwiperSlide key={`${attachment}-${Math.random()*999}`}>< img onClick={() => openDetails()} src={attachment} alt="" /></SwiperSlide>
                                )
                            }

                        </Swiper>

                    </div>
                }
            </div>

            <div className="horizontal-line"></div>

            <div className="post-footer">
                <div className="comments" onClick={() => openDetails()}>
                    <Icon name="forum" />
                    {data.comments}
                    <span>Comentários</span>
                </div>
                <div className="hearts" >
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

export default Post;
