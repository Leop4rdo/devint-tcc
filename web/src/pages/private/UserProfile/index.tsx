import MenuWapper from "components/layout/MenuWrapper";
import UserProfileEdit from "components/layout/UserProfileEdit";
import Icon from "components/shared/Icon";
import React from "react";


const UserProfilePage: React.FC = () => {


    return (
        <MenuWapper>
            <div className="container-user-profile">

                <div className="container-profile-style">

                    <div className="background-image">
                    </div>


                    <div className="container-of-information">
                        <div className="container-profile-data">
                            <div className="container-image-face-user">
                            </div>
                            <h2>Name user</h2>
                            <p>Bio muito bunita feita para exemplificar uns bagui ai
                                tipo... alguma coisa</p>

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
                        </div>

                        <UserProfileEdit iconName="group" subject="Contatos">
                            <div className="container-contact-quite">
                                <div className="container-email">
                                    <Icon name="email" />
                                    <p>emailqualddddddddddddddddddquer@gmail.com</p>
                                </div>

                                <div className="container-phone">
                                    <Icon name="call" />
                                    <p>emailqualquer@gmail.com</p>
                                </div>

                            </div>

                        </UserProfileEdit>

                        <UserProfileEdit iconName="center_focus_weak" subject="Foco de carreira" >

                            <div className="container-career-focus">
                                 <p>Front-end</p>
                                 <p>Front-end</p>   
                                 <p>Front-end</p>
                                 <p>Front-end</p>
                                 <p>Front-end</p>   
                                 <p>Front-end</p>
                                 <p>Front-end</p>
                                 <p>Front-end</p>   
                                 <p>Front-end</p>
                                 <p>Front-end</p>
                                 <p>Front-end</p>   
                                 <p>Front-end</p>       
                                   
                            </div>

                        </UserProfileEdit>

                    </div>

                </div>

            </div>

        </MenuWapper>

    )


}


export default UserProfilePage