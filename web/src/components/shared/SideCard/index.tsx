import React, { ReactElement } from "react"

interface ISideCard {
    title: string
    children: ReactElement[] | ReactElement
}

const SideCard: React.FC<ISideCard> = ({ title, children }) => {
    return (
        <div className="side-card">
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default SideCard