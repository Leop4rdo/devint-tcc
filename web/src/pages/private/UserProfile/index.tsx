import MenuWapper from "components/layout/MenuWrapper";
import UserProfileEdit from "components/layout/UserProfileEdit";
import Icon from "components/shared/Icon";
import React from "react";



const UserProfilePage: React.FC = () => {


    return (
        <MenuWapper>
            <div className="container-user-profile">

                <div className="background-image">
                    <img src="./assets/images/papeldeparede.png" />
                    <Icon name="edit" />
                </div>

                <div className="container-profile-style">

                    <div className="container-of-information">

                        <div className="container-profile-data">
                            <div className="icon-edit">
                                <Icon name="edit" />
                            </div>
                            <div className="container-image-face-user">

                            </div>

                            <div className="data-user">
                                <h2>Name user</h2>
                                <span>
                                    <img src="assets/icons/github.svg" alt="" />
                                    Ezequiel-Mathias
                                </span>
                                <p>Bio muito bunita feita para exemplificar uns bagui ai
                                    tipo... alguma coisa</p>
                            </div>

                            <div className="container-follower-data">
                                <div className="container-followers">
                                    <span>43</span>
                                    <p>Seguidores</p>

                                </div>
                                <div className="container-following">
                                    <span>45</span>
                                    <p>Seguindo</p>
                                </div>
                            </div>

                            <div className="container-follow-unfollow">
                                <span><Icon name="add" />Seguir</span>
                            </div>
                        </div>

                        <UserProfileEdit iconName="forum" subject="Contato">

                            <div className="container-contact-quite">
                                <div className="container-email">
                                    <Icon name="email" />
                                    <span>emailqualddddddddddddddddddquer@gmail.com</span>
                                </div>

                                <div className="container-phone">
                                    <Icon name="call" />
                                    <span>(11) 4954-5965</span>
                                </div>

                            </div>

                        </UserProfileEdit>

                        <UserProfileEdit iconName="group" subject="Sobre" >

                        <div className="container-about">
                            <div className="container-email">
                                <Icon name="calendar_month" />
                                <span>14/01/2001</span>
                            </div>

                            <div className="container-sex">
                                <Icon name="group" />
                                <span>Masculino</span>
                            </div>

                            <div className="container-user-git-hub">
                                <img src="assets/icons/github.svg" alt="" />
                                <span>Ezequiel-Mathias</span>
                            </div>

                        </div>
                        </UserProfileEdit>

                        <UserProfileEdit iconName="center_focus_weak" subject="Foco de carreira" >
                            <div className="container-career-focus">
                                <span>Front-End</span>
                            </div>
                        </UserProfileEdit>

                        <UserProfileEdit iconName="work" subject="Trabalho Atual" >
                            <div className="container-career-focus">
                                <span>Front-end</span>
                            </div>
                        </UserProfileEdit>

                        <UserProfileEdit iconName="school" subject="Senioridade">
                            <div className="container-seniority-user">
                                <span>Junior</span>
                            </div>
                        </UserProfileEdit>


                        <UserProfileEdit iconName="star" subject="Habilidades">
                            <div className="skill-user">
                                <div className="container-skill-user">
                                    <div className="container-skill">
                                        <Icon name="star" />
                                        <span>Html e css</span>
                                    </div>
                                </div>

                                <div className="container-skill-user">
                                    <div className="container-skill">
                                        <Icon name="star" />
                                        <span>Html e css</span>
                                    </div>
                                </div>
                                <div className="container-skill-user">
                                    <div className="container-skill">
                                        <Icon name="star" />
                                        <span>Html e css</span>
                                    </div>
                                </div>
                            </div>

                        </UserProfileEdit>

                        <UserProfileEdit iconName="push_pin" subject="Outros links">

                            <div className="container-links">
                                <div className="links">
                                    <span>Link qualquer</span>
                                </div>

                                <div className="links">
                                    <span>Link qualquer</span>
                                </div>

                                <div className="links">
                                    <span>Link qualquer</span>
                                </div>
                                <div className="links">
                                    <span>Link qualquer</span>
                                </div>


                            </div>

                        </UserProfileEdit>

                    </div>

                </div>

            </div>

        </MenuWapper>

    )


}


export default UserProfilePage