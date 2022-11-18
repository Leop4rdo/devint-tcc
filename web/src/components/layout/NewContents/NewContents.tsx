import React from "react";

interface INewContents{    
    catchphrase : string
    writting?: any
    newContentName : string
}

const NewContents: React.FC<INewContents> = ({catchphrase , writting , newContentName}) => {

    return (
        <div className="new-post">
            <span>{catchphrase}</span>
            <button className="btn-primary" onClick={() => 
            writting()    
            }>{newContentName}</button>
        </div>
    )
}

export default NewContents