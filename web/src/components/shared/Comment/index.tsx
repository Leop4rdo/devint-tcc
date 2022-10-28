import React, { useContext } from 'react'
import {useState} from 'react';
import Icon from '../Icon';
import Button from '../Button';
import * as postService from "../../../services/post.service"
import IComment from 'interfaces/IComment';
import { AuthContext } from 'store/context/Auth.context';
import AutoTextArea from '../TextArea';


interface ICommentProps {
    data: IComment
    refresh : () => void
}

const Comment: React.FC<ICommentProps> = ({ data, refresh }) => {
    const authContext = useContext(AuthContext)
    const [liked, setLiked] = useState(data.alreadyHearted)
    const [writting, setWritting] = useState(false)
    const [ comment, setComment ] = useState(data)

    const [ answer, setAnswer ] = useState('')

    const giveLike = async () => {
       await postService.addHeartToComment(data.id)

        setLiked(!liked)
    }

    const addAnswer = async () => {
        const res = await postService.addAnswer({ content : answer}, data.id)

        if (res.hasError !== false) 
            return alert('Erro ao responder comentário, tente novamente mais tarde!')

        setWritting(false)
        setAnswer('')

        refresh()
    }

    return (
        <div className="comment-container">
            <div className="comment">
                <div className="profile-pic">
                    <img src={data.writter.profilePicUrl} alt="" />
                </div>

                <div className="content-container">
                    <span className="username">{data.writter.name}</span>
                    <p className="text-content">{data.content}</p>  

                    <div className="comment-footer">
                        <span id='answer' onClick={() => setWritting(!writting)}>Responder</span>

                        <div className='likes'>
                            {
                                (liked && !data.alreadyHearted) ? data.hearts + 1 : (!liked && data.alreadyHearted) ? data.hearts - 1 : data.hearts
                            }
                            <Button onClick={giveLike}>
                                    <Icon name="favorite" id={`${liked ? 'already-hearted' : ''}`} />
                            </Button>
                        </div>
                    </div>  
                </div>
            </div>

            { writting && <div className="new-comment-container">
                <div className="profile">
                    <img src={authContext?.userData.profilePicUrl} />
                </div>
                <AutoTextArea value={answer} onChange={(e) => setAnswer(e.target.value) } />
                <Icon name="send" onClick={addAnswer}/>
            </div>}

            {
                data.answers.map((answer : any) => 
                    <div className="comment answer" key={data.id}>
                        <div className="profile-pic">
                            <img src={answer.writter.profilePicUrl} alt="" />
                        </div>

                        <div className="content-container">
                            <span className="username">{answer.writter.name}</span>
                            <p className="text-content">{answer.content}</p>  
                        </div>
                    </div>
                )
            }
        </div>
    )
}


export default Comment