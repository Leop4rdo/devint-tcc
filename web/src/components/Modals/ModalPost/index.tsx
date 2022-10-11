import React from "react";
import {SwiperProps , SwiperSlide , Swiper} from 'swiper/react'
import Button from "../../shared/Button";
import Icon from "../../shared/Icon";
import InputComment from "../../shared/Input";

import {Pagination , A11y} from 'swiper'




const ModalPost: React.FC = () => {

    return (
        <div className="container-modal-post">

            <div className="modal-post">
                <div className="container-itens">
              
                    <div className="user-info">

                    <div className="dice-user">
                        <div className="user-face"><img></img></div>
                        <h2>Name user</h2>
                    </div>

                        <Button className="follow-button" children={[<Icon name="add" />, "Seguir"]} />
                    </div>

                    <p>loremipsumaskdçlaskjlkdjsalkjdlasjklads</p>

                    <div className="post-footer">
                        <div className="comment-user">
                            <div className="users-faces"><img></img></div>
                            <span>10 Comentarios</span>
                        </div>

                        <div className="hearts">
                            <Button>
                                <Icon name="favorite" />
                            </Button>
                        </div>
                    </div>


                    <div className="container-comments">
                        <div className="comment">
                        <div className="users-faces-comment"><img></img></div>
                        <span>Flavin</span> 
                        <InputComment placeholder="Escreva um comentário..." icon="send" /> 
                        
                        </div>
                        <div className="comment">
                            <div className="users-faces-comment"><img></img></div>
                            <span>Flavin</span> 
                        </div>
                        <div className="comment">
                            <div className="users-faces-comment"><img></img></div>
                            <span>Flavin</span><p>aaaaaaaaaaaaaaaaaaaaa</p>
                        
                        </div>
                        
                    </div>

                </div>


                <div className="container-carousel">
                    <Icon name="close"/>
                    <div className="carousel-image">
                        
                        <Swiper  modules={[Pagination, A11y]} 
                            spaceBetween={50}
                            slidesPerView = {1}
                            navigation
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <img src="assets/images/teste.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="assets/images/Tony.jpg" alt="" />
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalPost