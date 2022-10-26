import React, { Children, ReactNode } from "react";
import Icon from "components/shared/Icon";

interface IUserProfileEditProps {
    iconName: string
    subject: string
    children?: ReactNode
}

const UserProfileEdit: React.FC<IUserProfileEditProps> = ({ iconName, subject, children }) => {
    return (

        <div className="container-information-user">

            <div className="container-information-top">

                <div className="contact">
                    <Icon name={iconName} />
                    <p>{subject}</p>
                </div>
                <Icon name="edit" />

            </div>

          
                {children}

            


        </div>




    )
}

export default UserProfileEdit