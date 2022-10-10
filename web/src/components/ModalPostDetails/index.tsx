import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import IPost from "interfaces/IPost";
import React from "react";

interface IPostDetails {
    data: IPost
}

const PostDetails: React.FC<IPostDetails> = ({ data }) => {

    let commentAuthors = data.comments.map(function(item){
        return item.writter.profilePicUrl;
    })

    return(
        <div className="post-details">
            <div className="post-header">
                <div className="user-info">
                    <img src={data.writter.profilePicUrl} />
                    <h2>{data.writter.name}</h2>
                </div>
                <Button className="follow-button" children={[<Icon name="add"/> , "Seguir"]}/>
            </div>
            <p>{data.content}</p>
            <div className="post-footer">
                <div className="comments">
                    <img src={commentAuthors[0]} />
                    <img src={commentAuthors[1]} />
                    <span>10 comentários</span>
                </div>
                <div className="hearts">
                    {data.hearts}
                    <Button>
                        <Icon name="favorite"/>
                    </Button>
                </div>
            </div>

            <Comment data={data} />
        </div>
    )
}

export default PostDetails;