import React from 'react';

interface IIconProps {
    name : string
}

const Icon: React.FC<IIconProps> = ({name}) => {
    return (
        <span className="icon material-symbols-rounded">
            {name}
        </span>
    )
}

export default Icon;