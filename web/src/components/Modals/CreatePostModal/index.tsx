import Icon from "components/shared/Icon";
import AutoTextArea from "components/shared/TextArea";
import React, { useContext } from "react";
import { AuthContext } from "store/context/Auth.context";

interface ICreatePostModalProps {
    onClose : () => void
}

const CreatePostModal : React.FC<ICreatePostModalProps> = ({ onClose }) => {
    const authContext = useContext(AuthContext)

    console.log(authContext?.userData)

    return (
        <div className="modal-wrapper">
            <div className="create-post-modal">
                <header>
                    <div className="user-data-container">
                        <img className="profile-image" src={authContext?.userData?.profilePicUrl}/>
                        <div className="user-names-container">
                            <span id="username">{authContext?.userData?.name}</span>
                            <span id="github-username">{authContext?.userData?.githubUsername}</span>
                        </div>
                    </div>
                    
                    <Icon name="close" onClick={onClose}/>
                </header>

                <div className="content">
                    <AutoTextArea className="post-content-textarea" placeholder="ex : hoje estou pensando em aprender..."/>
                </div>

                <footer>
                    <div className="attachment-load-options">
                        <Icon name="image" />
                    </div>
                    <div className="post-options">
                        <select>
                            <option selected>Selecione um projeto</option>
                        </select>
                        <button className="btn-primary publish-btn">
                            Publicar
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default CreatePostModal;