import Icon from "components/shared/Icon";
import Select from "components/shared/Select";
import AutoTextArea from "components/shared/TextArea";
import React from "react";

interface IDetailCardProps extends React.PropsWithChildren {
    headerIcon : string
    title : string
    onEditPress ?: () => void
    editing ?: boolean
    canEdit ?: boolean
}

const DetailCard : React.FC<IDetailCardProps> = (props) => {

    return (
        <div className="detail-card">
            <div className="card-header">
                <div>
                    <Icon name={props.headerIcon}/>
                    <span>{props.title}</span>
                </div>

                {
                    props.onEditPress && props.canEdit &&
                    <Icon name={(!props.editing) ? "edit" : "check"} onClick={props.onEditPress} />
                }
            </div>

            {props.children}
        </div>
    )
}

export default DetailCard