import React, { ReactElement } from "react"
import Button from "../Button"

// interface INewPost {
//     children: ReactElement[] | ReactElement
// }

const NewPost: React.FC = () => {
    return (
        <div className="new-post">
            <span>O que você tem para nos dizer hoje?</span>
            <Button className="btn-primary" children="Novo Post"/>
        </div>
    )
}

export default NewPost