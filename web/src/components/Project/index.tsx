import Icon from "components/shared/Icon";
import React, { useState, useEffect, useContext } from "react";
import Button from "components/shared/Button";
import IProjectProps from "interfaces/IProject";
import * as projectService from 'services/project.service';
import { AuthContext } from "store/context/Auth.context";
import Project from "interfaces/IProject";
import { Link } from "react-router-dom";

interface IProject {
    openCloseModal: any
    data: Project
    EditProject: any
    canEdit ?: boolean
}

const ProjectCard: React.FC<IProject> = ({ data, openCloseModal, EditProject, canEdit }) => {
    const [hearted, setHearted] = useState(false);
    const authContext = useContext(AuthContext)

    const toggleHeart = () => {
        projectService.toggleHeart(data.id!)
        setHearted(!hearted)
    }

    const getHeartAmount = () => {
        if (data.hearts!.includes(authContext?.userData.id) && !hearted)
            return data.hearts?.length! - 1;
        if (!data.hearts!.includes(authContext?.userData.id) && hearted)
            return data.hearts?.length! + 1;
        else
            return data.hearts?.length!;
    }

    useEffect(() => { setHearted(data.hearts!.includes(authContext?.userData.id)) }, [data])

    return (
        <div className="container-project" >
            {
                data.bannerURI &&
                <Link to={`/dev/projectdetails/${data.id}`}>
                    <div className="container-image">
                        <img src={data.bannerURI} alt="" />
                    </div>
                </Link>
            }


            <div className="container-name-project">
                <Link to={`/dev/projectdetails/${data.id}`}>
                    <div className="name-project">
                        <h2>{data.name}  {data.openSource ? <span>(Open Source)</span> : ""}</h2>
                    </div>
                </Link>
                {   
                    canEdit &&
                    <Icon name="edit" onClick={() => { openCloseModal(); EditProject() }} />
                }

            </div>

            <div className="container-description-project">
                {
                    data.desc && <p>{data.desc}</p> 
                }

            </div>

            <div className="container-participants">
                {
                    data.members.map((members) => (
                        <Link to={`/dev/${members.id}`} >
                            <div className="container-project-participants">
                                <img src={members.profilePicUrl} alt="" />
                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className="container-interactions">
                <div className="container-github">
                    <a target='_blank' href={data.githubRepository?.url}>
                        <img src="../assets/icons/github.svg" alt="" />
                        github
                    </a>
                </div>
                <div className="container-interaction-project">

                    <Button onClick={toggleHeart}>
                        <Icon name="favorite" id={`${hearted ? 'already-hearted' : ''}`} />
                    </Button>
                    <span>{
                        getHeartAmount()
                    }</span>
                </div>
            </div>
        </div >
    )
}

export default ProjectCard