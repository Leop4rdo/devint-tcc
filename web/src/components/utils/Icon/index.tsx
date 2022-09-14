import React from 'react';

interface IIconProps {
    name : string
    onClick? : any
}

const Icon: React.FC<IIconProps> = ({name, onClick}) => {
    return (
        <span className="icon material-symbols-rounded" onClick={onClick}>
            {name}
        </span>
    )
}

export default Icon;