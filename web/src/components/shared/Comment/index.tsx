import IComment from "interfaces/IComment";
import IPost from "interfaces/IPost";
import React from "react";

interface IPostProps {
    data : IComment
}

const Comment: React.FC<IPostProps> = ({ data }) => {
    return (
        <div className="comment-container">
            {data.writter.profilePicUrl}
            {data.writter.name}
            {data.content}
        </div>
    )
}

export default Comment;