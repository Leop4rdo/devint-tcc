import React from "react";

interface IButtonProps {
    props?: any,
    type: "submit" | "button",
    children?: React.ReactNode,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({ type, children, onClick, ...props }) => {

    return (
        <button type={type} onClick={onClick} {...props} >{children} </button>
    )
}

export default Button;