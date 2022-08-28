import React from "react";
// import { AccessAlarm } from '@mui/icons-material';


interface IInputProps {
    type: "text" | "password" | "email",
    placeholder: string,
    icon?: string,
    onChange: (event: any) => void,
    value?: string,
}

const Input: React.FC<IInputProps> = ({ type, placeholder, value, onChange, icon, ...rest }) => {

    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    )
}

export default Input