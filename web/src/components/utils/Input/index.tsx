import Icon from "components/utils/Icon";
import React from "react";


interface IInputProps {
    type?: "text" | "password" | "email",
    placeholder?: string,
    icon?: string,
    onChange: (event: any) => void,
    value?: string,
}

const Input: React.FC<IInputProps> = ({ type, placeholder, value, onChange, icon }) => {

    return (
        <div className={`input-container`}>
            {icon && <Icon name={icon}/>}
            <input className={(icon) ? 'icon-input' : ''}type={type || "text"} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export default Input