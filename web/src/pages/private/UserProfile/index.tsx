import MenuWapper from "components/layout/MenuWrapper";
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


                        <div className="container-contact-user">

                            <div className="container-contact-header">

                                <div className="contact">
                                    <Icon name="group" />
                                    <p>Contatos</p>
                                </div>
                                <Icon name="edit" />

                            </div>

                            <div className="container-contact-main">
                                <div className="container-email">
                                    <Icon name="email" />
                                    <p>emailqualquer@gmail.com</p>
                                </div>

                                <div className="container-phone">
                                    <Icon name="call" />
                                    <p>emailqualquer@gmail.com</p>
                                </div>

                            </div>



                        </div>


                        <div className="container-career-focus">

                            <div className="container-career-header">

                                <div className="contact">
                                    <Icon name="group" />
                                    <p>Contatos</p>
                                </div>
                                <Icon name="edit" />

                            </div>

                        </div>

                    </div>












                </div>

            </div>

        </MenuWapper>

    )


}


export default UserProfilePage