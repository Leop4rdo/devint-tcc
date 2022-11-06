import Icon from "components/shared/Icon";
import React, { useState } from "react";

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    icon?: string,
    isPassword?: boolean
    validate?: (name?: string) => boolean
    image?: string,
    
}

const Input: React.FC<IInputProps> = ( props) => {
    const [isValid, setValid] = useState(true);
    const [textVisible, setTextVisible] = useState(false);

    const validate = () => {
        if (!props.validate) return

        setValid(props.validate(props.name))
    }

    const toggleVisibility = () => setTextVisible(!textVisible);

    return (
        <div className={`input-container ${!isValid ? 'error' : ''}`} onBlur={validate}>
            {props.image && <img src={props.image} />}
            {props.icon && <Icon name={props.icon} />}
            <input value={props.value}  {...props} className={(props.icon) ? 'icon-input' : ''} type={(props.type == "password") ? ((textVisible) ? "text" : "password") : (props.type)} />
            {
                props.type == "password" &&
                <Icon name={textVisible ? "visibility" : "visibility_off"} onClick={toggleVisibility} />
            }
        </div>
    )
}

export default Input
