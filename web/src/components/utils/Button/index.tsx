import React from "react";

interface IButtonProps {
    className?: string,
    style?: any,
    icon?: string,
    type?: "submit" | "button" | "reset",
    children?: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<IButtonProps> = ({ type, children, onClick, style, className}) => {

    return (
        <button type={type || "button"} onClick={onClick} style={style} className={className} >
            {children}
        </button>
    )
}

export default Button;