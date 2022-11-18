import React from "react";

interface INewContents{    
    catchphrase : string
    writtingPost?: any
    newContentName : string
}

const NewContents: React.FC<INewContents> = ({catchphrase , writtingPost , newContentName}) => {

    return (
        <div className="new-post">
            <span>{catchphrase}</span>
            <button className="btn-primary" onClick={() => 
            writtingPost()    
            }>{newContentName}</button>
        </div>
    )
}

export default NewContents