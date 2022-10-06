import IPost from "interfaces/IPost";
import React from "react"
import Button from "../Button";
import Icon from "../Icon";

interface IPostProps {
    data : IPost
}

const Post: React.FC<IPostProps> = ({ data }) => {
    
    let commentAuthors = data.comments.map(function(item){
        return item.writter.profilePicUrl;
    })
    
    commentAuthors.length = 2;

    return (
        <div className="postcard" key={data.id}>
            <div className="post-header">
                <div className="user-info">
                    <img src={data.writter.profilePicUrl} />
                    <h2>{data.writter.name}</h2>
                </div>
                <Button children={[<Icon name="done"/> , "Seguir"]}/>
            </div>

            <div className="post-content">
                <p>{data.content}</p>
                <div className="post-images">
                    <img src={data.attachments[0]} />
                </div>
            </div>
            <div className="post-footer">
                <div className="comments">
                    <img src={commentAuthors[0]} />
                    <img src={commentAuthors[1]} />
                    <span>10 comentários</span>
                </div>
                <div className="hearts">
                    {data.hearts}
                    <Icon name="favorite"/>
                </div>
            </div>
        </div>
    );
}

// passo 1 -> pegar o array
// passo 2 -> quebrar o array nos 3 primeiros index
// passo 3 -> mapear os 3 primeiros index para uma <img>2

export default Post;