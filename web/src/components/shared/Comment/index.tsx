import IPost from "interfaces/IPost";
import React from "react";

interface IPostProps {
    data : IPost
}

const Comment: React.FC<IPostProps> = ({ data }) => {

    let commentContent = data.comments.map(function(item){
        return item.content;
    })

    let commentAuthorPic = data.comments.map(function(item){
        return item.writter.profilePicUrl;
    })

    let commentAuthorName = data.comments.map(function(item){
        return item.writter.name;
    })

    return (
        <div className="comment-container">
            {commentAuthorPic}
            {commentAuthorName}
            {commentContent}
        </div>
    )
}

export default Comment;