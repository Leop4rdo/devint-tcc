import Icon from "components/shared/Icon";
import React from "react";
import Button from "components/shared/Button";
import IProjectProps from "interfaces/IProject";

interface IProject {
    openCloseModal: any
    data: IProjectProps
}

const Project: React.FC<IProject> = ({ data, openCloseModal }) => {

    return (
        <div className="container-project">
            <div className="container-image">
                <img src={data.bannerURI} alt="" />
            </div>

            <div className="container-name-project">
                <div className="name-project">
                    <h2>{data.name}</h2>

                    {data.openSource ? <span>(Open source)</span> : <span>(Closed source)</span>}

                </div>
                <Icon name="edit" onClick={openCloseModal} />

            </div>

            <div className="container-description-project">
                <p>{data.desc}</p>
            </div>

            <div className="container-participants">

                <div className="container-project-owner">
                    <div className="container-crown-project-owner">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Coroa_Real_Fechada_-_barrete_purp%C3%BAreo.svg/1200px-Coroa_Real_Fechada_-_barrete_purp%C3%BAreo.svg.png" alt="" />
                    </div>

                    <div className="project-owner">
                        <img src={data.members[0].profilePicUrl} alt="" />
                    </div>
                </div>

                {
                    data.members.map((members) => (
                        <div className="container-project-participants">
                            <img src={members.profilePicUrl} alt="" />
                        </div>
                    ))
                }


            </div>


            <div className="container-interactions">
                <div className="container-github">
                    <img src="../../public/assets/icons/google.svg" alt="" />
                    <span>github</span>
                </div>
                <div className="container-interaction-project">
                    <Button onClick={() => { }}>
                        <Icon name="favorite" />
                    </Button>
                    <span>{data.hearts}</span>
                </div>
            </div>
        </div>
    )
}

export default Project