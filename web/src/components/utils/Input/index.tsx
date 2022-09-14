import Icon from "components/utils/Icon";
import React, { useState } from "react";

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    icon?: string,
    validate ?: (name ?: string) => boolean
}

const Input: React.FC<IInputProps> = (props) => {
    const [isValid, setValid] = useState(true);

    const validate = () => {
        if (!props.validate) return
        
        setValid(props.validate(props.name))
    }

    const [textVisible, setTextVisible] = useState(false);

    const toggleVisibility = () => setTextVisible(!textVisible);

    return (
        <div className={`input-container ${!isValid ? 'error' : ''}`} onBlur={validate}>
            {props.icon && <Icon name={props.icon}/>}
            <input className={(props.icon) ? 'icon-input' : ''} {...props} />
        </div>
    )
}

export default Input