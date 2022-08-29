import React from "react";

interface IButtonProps {
    props?: any,
    icon?: string,
    type?: "submit" | "button" | "reset",
    children?: React.ReactNode,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({ type, children, onClick, ...props }) => {

    return (
        <button type={type || "button"} onClick={onClick} {...props} >
            {children}
        </button>
    )
}

export default Button;