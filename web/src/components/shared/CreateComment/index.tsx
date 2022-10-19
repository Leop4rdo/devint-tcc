import React from 'react'
import Icon from '../Icon';
import AutoTextArea from '../TextArea';


interface ICreateCommentProps {
    data?: any
    icon? : string
    onClick? : any

}

const CreateComment: React.FC<ICreateCommentProps> = ({ icon , onClick }) => {


    return (
        <div className="container-create-comment">
            <div className="create-comment">
                <div className="users-faces-comment"><img src='https://avatars.githubusercontent.com/u/5909549?v=4' alt="" /></div>
                <span>Vinicio</span>
                <AutoTextArea />
            </div>
            
            { icon &&
              <Icon name={icon} onClick={onClick}/>  
            }
            
        </div>

    )
}

export default CreateComment