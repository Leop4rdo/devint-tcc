import Icon from "components/shared/Icon";
import React from "react";

interface IModalProps {
    children: React.ReactNode
}

const Modal: React.FC<IModalProps> = ({ children }) => {
    return (
        <div className="modal">
            <div className="container">
                <Icon name="close" />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}


export default Modal