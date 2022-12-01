import Icon from "components/shared/Icon";
import ISkillProps from "interfaces/ISkill";
import React from "react";

interface ISkillTokenProps {
    data : ISkillProps,
    editing ?: boolean,
    onRemove : (evt : any) => void
}

const SkillToken : React.FC<ISkillTokenProps> = (props) => {
    const onClick = () => {
        if (!props.editing)
            return

        props.onRemove(props.data.id!)
    }

    return (
        <div>
            <img src={props.data.icon}/>
            <div className="delete-skill">
                {
                    props.editing &&
                    <Icon name="delete" onClick={onClick}/>
                }
                {/* <span>{props.data.name}</span> */}
            </div>
        </div>
    )
}

export default SkillToken