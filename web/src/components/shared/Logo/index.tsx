import React from "react";

interface ILogoProps {
    primary ?: string
    secondary ?: string
}

const LogoComponent : React.FC<ILogoProps> = ({ primary, secondary }) => {

    return (
        <div className="logo" style={{color : secondary || '#F5F9FF'}}>
            <span style={{color : primary || "#7865FF"}}>&#60;</span>
            DevInt
            <span style={{color : primary || "#7865FF"}}>_</span>
        </div>
    )
}

export default LogoComponent;