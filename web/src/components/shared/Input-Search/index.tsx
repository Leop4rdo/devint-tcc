import React from "react";
import { useState } from "react";
import Icon from "components/shared/Icon";


interface IInputSearchProps extends React.HTMLProps<HTMLInputElement> {
    icon?: string,
    isPassword?: boolean
    validate?: (name?: string) => boolean
    image?: string
}
const InputSearch : React.FC<IInputSearchProps> = (props) => {
    const [isValid, setValid] = useState(true);
    const [textVisible, setTextVisible] = useState(false);

    const validate = () => {
        if (!props.validate) return

        setValid(props.validate(props.name))
    }

    const toggleVisibility = () => setTextVisible(!textVisible);

    return (
        <div className={`input-search-container ${!isValid ? 'error' : ''}`} onBlur={validate}>
            {props.image && <img src={props.image} />}
            
            <input {...props} className={(props.icon) ? 'icon-input' : ''} type={(props.type == "password") ? ((textVisible) ? "text" : "password") : (props.type)} />

            {props.icon && <Icon name={props.icon} />}
            {
                props.type == "password" &&
                <Icon name={textVisible ? "visibility" : "visibility_off"} onClick={toggleVisibility} />
            }
        </div>
    )
}

export default InputSearch