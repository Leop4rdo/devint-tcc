import Icon from "components/shared/Icon";
import React from "react";

interface IModalProps {
    children: React.ReactNode
   
}

const ModalWrapper: React.FC<IModalProps> = ({ children }) => {
    return (
        <div className="modal">
            {children}
        </div>
    )
}


export default ModalWrapper