import Icon from "components/shared/Icon";
import React from "react";

interface IModalProps {
    children: React.ReactNode
    onClick : any
}

const ModalWrapper: React.FC<IModalProps> = ({ children , onClick }) => {
    return (
        <div className="modal">
            <div className="container">
                <Icon name="close" onClick={onClick}/>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}


export default ModalWrapper