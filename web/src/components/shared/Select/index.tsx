import React from "react";  
import Icon from "../Icon";

interface ISelectProps extends React.HTMLProps<HTMLSelectElement> {
    icon?: string,
    onChange: any,
}

const Select: React.FC<ISelectProps> = (props) => {

    return (
        <div className="select-container">

            { props.icon &&  <Icon name={props.icon} />}

            <select {...props} onChange={props.onChange}>

                {props.children}

            </select>

        </div>
    )


}

export default Select;