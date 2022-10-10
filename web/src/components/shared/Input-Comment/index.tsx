import React from "react";
import Icon from "components/shared/Icon";


interface IInputCommentProps extends React.HTMLProps<HTMLInputElement> {
    icon?: string,
    isPassword?: boolean
    validate?: (name?: string) => boolean
    image?: string
}
const InputComment: React.FC<IInputCommentProps> = (props) => {
    return (
        <div className={"input-comment-container "}>

            <input {...props} className={'icon-input'} />

            
            {props.icon && <Icon name={props.icon} />}
            
            
        </div>
    )
}

export default InputComment