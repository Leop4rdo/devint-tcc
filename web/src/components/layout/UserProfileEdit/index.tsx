import React, { Children, ReactNode } from "react";
import Icon from "components/shared/Icon";

interface IUserProfileEditProps {
    iconName: string
    subject: string
    children?: ReactNode
    OnClick : any
    editIcon : any
}

const UserProfileEdit: React.FC<IUserProfileEditProps> = ({ iconName, subject, children , OnClick , editIcon}) => {
    return (

        <div className="card-user-informations">

            <div className="card-top">
                <div className="card-tittle">
                    <Icon name={iconName} />
                    <span>{subject}</span>
                </div>
                {editIcon ? 
                    <Icon name="done" onClick={OnClick}/>
                    :
                    <Icon name="edit" onClick={OnClick}/>
                }
                

            </div>

            <div className="user-informations">
                {children}
            </div>

        </div>

    )
}

export default UserProfileEdit