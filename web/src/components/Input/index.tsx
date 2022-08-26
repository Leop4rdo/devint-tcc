import React from "react";


interface IInputProps {
    type: "text" | "password" | "email",
    placeholder: string,
    icon? :string,
    onChange: (event : any) => void,
    value? : string,

}

const Input : React.FC<IInputProps> = ({type, placeholder, value, onChange}) => {

    return (
            <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    )
}

export default Input