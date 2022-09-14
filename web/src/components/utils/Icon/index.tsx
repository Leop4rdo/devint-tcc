import React from 'react';

interface IIconProps extends React.HTMLProps<HTMLSpanElement> {
    name : string
}

const Icon: React.FC<IIconProps> = (props) => {
    return (
        <span {...props} className="icon material-symbols-rounded">
            {props.name}
        </span>
    )
}

export default Icon;