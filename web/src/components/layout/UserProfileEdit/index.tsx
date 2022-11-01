import React, { Children, ReactNode } from "react";
import Icon from "components/shared/Icon";

interface IUserProfileEditProps {
    iconName: string
    subject: string
    children?: ReactNode
}

const UserProfileEdit: React.FC<IUserProfileEditProps> = ({ iconName, subject, children }) => {
    return (

        <div className="card-user-informations">

            <div className="card-top">
                <div className="card-tittle">
                    <Icon name={iconName} />
                    <span>{subject}</span>
                </div>
                <Icon name="edit"/>
            </div>

            <div className="user-informations">
                {children}
            </div>

        </div>

    )
}

export default UserProfileEdit