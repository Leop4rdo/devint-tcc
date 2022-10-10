import React from "react";
import Icon from "components/shared/Icon";


interface IInputSearchProps extends React.HTMLProps<HTMLInputElement> {
    icon?: string,
    isPassword?: boolean
    validate?: (name?: string) => boolean
    image?: string
}
const InputSearch : React.FC<IInputSearchProps> = (props) => {
    return (
        <div className={"input-search-container "}>
            {props.image && <img src={props.image} />}
            <input {...props} className={ 'icon-input'} type={'search'} />
            {props.icon && <Icon name={props.icon} />}
        </div>
    )
}

export default InputSearch