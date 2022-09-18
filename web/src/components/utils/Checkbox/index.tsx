import React from "react";

interface ICheckboxProps {
    isChecked: boolean;
    handleChangea: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

const Checkbox = (props: ICheckboxProps) => {
    return (
        <div>
            <label htmlFor={props.label}>{props.label}</label>
            <input
                type="checkbox"
                id={props.label}
                checked={props.isChecked}
                onChange={props.handleChangea}
            />
        </div>
    );
};

export default Checkbox;