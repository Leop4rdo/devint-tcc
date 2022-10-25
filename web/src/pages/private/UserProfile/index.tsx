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

                            <div className="contact-header">
                                <Icon name=""/>
                            </div>

                        </div>

                    </div>












                </div>

            </div>

        </MenuWapper>

    )


}


export default UserProfilePage