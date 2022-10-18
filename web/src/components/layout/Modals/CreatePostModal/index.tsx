import React, { useContext, useState } from "react";
import { AuthContext } from "store/context/Auth.context";

import firebase from "config/firebase"
import {v4 as randomUUIDV4} from "uuid"

import Icon from "components/shared/Icon";
import AutoTextArea from "components/shared/TextArea";

import * as postService from "services/post.service"
interface ICreatePostModalProps {
    onClose : () => void
}


const CreatePostModal : React.FC<ICreatePostModalProps> = ({ onClose }) => {
    const authContext = useContext(AuthContext)
    const [content, setContent] = useState('');
    const [attachments, setAttachments] = useState<string[]>([])
    const [uploading, setUploading] = useState(false);

    const upload = async (evt : any) => {
        setUploading(true)

        const file = evt.target.files[0]

        if (!file) return
        
        try {
            const extension = `.${file.name.split('.')[1]}`
            const fileName = randomUUIDV4() + extension

            const uploaded = await firebase.storage().ref().child('attachments/').child(fileName).put(file)

            setAttachments([
                ...attachments,    
                await uploaded.ref.getDownloadURL()
            ])
        } catch (err) {
            console.log(err)
            alert('Houve um erro inesperado ao fazer upload!')
        }

        setUploading(false)
    }

    const publishPost = async () => {
        if (!content || uploading) return
        
        const body = { content, attachments}

        const res = await postService.create(body)
        
        if (res.hasError) 
            return alert('Houve um erro inesperado ao publicar, tente novamente mais tarde!')

        onClose()
    }

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
                    <AutoTextArea onChange={({target}) => setContent(target.value)}  className="post-content-textarea" placeholder="ex : hoje estou pensando em aprender..."/>
                
                    <div className="attachment-list">
                        {
                            attachments.map((uri, idx) => 
                                <img src={uri} key={idx}/>
                            )
                        }
                    </div>
                </div>

                <footer>
                    <div className="attachment-load-options">
                        <div>
                            <input accept="image/*" onChange={upload} type="file" name="attachment-input" id="attachment-input" />
                            <label htmlFor="attachment-input"><Icon name="image" /></label>
                        </div>

                    </div>
                    <div className="post-options">
                        <select>
                            <option selected>Selecione um projeto</option>
                        </select>
                        <button 
                            onClick={publishPost}
                            className={`btn-primary publish-btn ${content && !uploading ? '' : 'disabled'}`}
                        >
                            Publicar
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default CreatePostModal;