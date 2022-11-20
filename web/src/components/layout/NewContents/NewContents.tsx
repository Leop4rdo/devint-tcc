import React from "react";

interface INewContents {
    catchphrase: string
    openCloseModal?: any
    newContentName: string
}

const NewContents: React.FC<INewContents> = ({ catchphrase, openCloseModal, newContentName }) => {

    return (
        <div className="new-post">
            <span>{catchphrase}</span>
            <button className="btn-primary" onClick={() =>
                openCloseModal()
            }>{newContentName}</button>
        </div>
    )
}

export default NewContents