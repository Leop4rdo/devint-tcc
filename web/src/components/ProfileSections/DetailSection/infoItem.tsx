import Icon from "components/shared/Icon";
import Select from "components/shared/Select";
import React from "react";

type inputOptions = {
    value : string,
    label : string
}

interface IInfoItemProps {
    value : string
    editing ?: boolean
    icon ?: string
    imageUri ?: any
    onChangeText ?: (evt : any) => void
    options ?: inputOptions[]
}

const InfoItem : React.FC<IInfoItemProps> = (props) => {
    const renderInput = () => {
        if (props.options)
            return (
                <Select value={props.value} onChange={props.onChangeText}>
                    {props.options.map((option) => <option {...option} key={option.value}/>)}
                </Select>
            )

        return <input type="text" value={props.value} onChange={props.onChangeText!}></input>
    }

    return (
        <div className="info-item">
            { props.icon && <Icon name={props.icon}/> }
            { props.imageUri && <img src={props.imageUri} />}

            {
                props.editing ?
                    renderInput()
                :
                    <span>{props.value}</span>
            }
        </div>
    )
}

export default InfoItem;