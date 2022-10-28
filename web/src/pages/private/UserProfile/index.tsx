import MenuWapper from "components/layout/MenuWrapper";
import React from "react";


const UserProfilePage: React.FC = () => {


    return (
        <MenuWapper>
            <div className="container-user-profile">

                <div className="container-profile-style">

                    <div className="background-image">
                    </div>

                    <div className="container-profile-data">
                        <div className="container-image-face-user">
                        </div>
                        <h2>Name user</h2>
                    </div>


                </div>

            </div>

        </MenuWapper>

    )


}


export default UserProfilePage