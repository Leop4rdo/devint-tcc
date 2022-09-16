import Icon from "components/utils/Icon";
import React, { useState } from "react";

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    icon?: string,
    isPassword ?: boolean
    validate?: (name?: string) => boolean
}

const Input: React.FC<IInputProps> = (props) => {
    const [isValid, setValid] = useState(true);
    const [textVisible, setTextVisible] = useState(false);

    const validate = () => {
        if (!props.validate) return

        setValid(props.validate(props.name))
    }


    // const isPassword = (props : any) => {
    //     if (props.type == "password") {
    //         <Icon name={textVisible ? "visibility" : "visibility_off" }/>
            
    //     }
    // }

    const toggleVisibility = () => setTextVisible(!textVisible);

    return (
        <div className={`input-container ${!isValid ? 'error' : ''}`} onBlur={validate}>
            {props.icon && <Icon name={props.icon} />}
            <input className={(props.icon) ? 'icon-input' : ''} type={(props.isPassword) ? ((textVisible) ? "text" : "password") : (props.type)} />
            {   
                props.isPassword &&
                <Icon name={textVisible ? "visibility" : "visibility_off" }  onClick={toggleVisibility} />
            }
        </div>
    )
}

export default Input