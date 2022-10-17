import React from 'react'
import CreateComment from "components/shared/CreateComment";
import {useState} from 'react';


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


    return (
        <div>
            <div className="comment" >
                <div className="container-user-dice">
                    <div className="users-faces-comment"><img src={data.writter.profilePicUrl} alt="" /></div>
                    <span>{data.writter.name}</span>
                    <p className="text-comment">{data.content}</p>
                </div>
                <span onClick={Replycomment}>Responder</span>
            </div>

            <div className='container-answer-comment'>
              {step[answerComment].component}

            </div>
        </div>
        
    )
}


export default Comment