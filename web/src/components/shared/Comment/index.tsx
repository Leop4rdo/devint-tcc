import React from 'react'
import CreateComment from "components/shared/CreateComment";
import {useState} from 'react';
import Icon from '../Icon';
import Button from '../Button';
import * as postService from "../../../services/post.service"


interface ICommentProps {
    data: any
    
}

const Comment: React.FC<ICommentProps> = ({ data }) => {

    const [answerComment, setAnswer] = useState(0)

    const Replycomment = () => {
        if (answerComment < 1) {
            setAnswer(answerComment + 1)
        }
        else if(answerComment >= 1){
            setAnswer(answerComment - 1)
        }
    }

    const step = [
        { component: null },
        { component: <CreateComment icon={'close'} onClick={Replycomment} data={data}/> },
        
    ]

    const [liked, setLiked] = useState(data.alreadyHearted)

    const giveLike = async () => {
       await postService.addHeartToComment(data.id)

        setLiked(!liked)
    }


    return (
        <div>
            <div className="comment" >
                <div className="container-user-dice">
                    <div className="users-faces-comment"><img src={data.writter.profilePicUrl} alt="" /></div>
                    <span>{data.writter.name}</span>
                    <p className="text-comment">{data.content}</p>
                </div>
                <div className='post-footer-comment'>
                    <span onClick={Replycomment}>Responder</span>
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

            <div className='container-answer-comment'>
              {step[answerComment].component}

            </div>
        </div>
        
    )
}


export default Comment