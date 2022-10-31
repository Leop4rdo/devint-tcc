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

        <div className="container-information-user">

            <div className="container-information-top">

                <div className="contact">
                    <Icon name={iconName} />
                    <p>{subject}</p>
                </div>
                {editIcon ? 
                    <Icon name="done" onClick={OnClick}/>
                    :
                    <Icon name="edit" onClick={OnClick}/>
                }
                

            </div>

          
                {children}

            


        </div>




    )
}

export default UserProfileEdit