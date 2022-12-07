import Icon from "components/shared/Icon";
import React, { useState, useEffect, useContext } from "react";
import Button from "components/shared/Button";
import IProjectProps from "interfaces/IProject";
import * as projectService from 'services/project.service';
import { AuthContext } from "store/context/Auth.context";
import Project from "interfaces/IProject";

interface IProject {
    openCloseModal: any
    data: Project
    EditProject: any
    idProject: any

}

const ProjectCard: React.FC<IProject> = ({ data, openCloseModal, EditProject, idProject }) => {
    const [UrlRepoGithubProject, setUrlRepoGithubProject] = useState()

    const authContext = useContext(AuthContext)
    const [liked, setLiked] = useState(data.alreadyHearted)



    const getUrlGithubRepo = async () => {
        const { data } = await projectService.findById(idProject)

        setUrlRepoGithubProject(data.githubRepository.url)
    }

    const toggleHeart = () => {
        projectService.toggleHeart(data.id!)
        setLiked(!liked)
    }

    /* const getHeartAmount = () => {
        if (data.hearts!.includes(authContext?.userData.id) && !hearted)
            return data.hearts?.length! -1;
        if (!data.hearts!.includes(authContext?.userData.id) && hearted)
            return data.hearts?.length! +1;
        else
            return data.hearts?.length!;
    } */



    useEffect(() => { getUrlGithubRepo(); }, [])

    return (
        <div className="container-project" >
            {data.bannerURI ?
                <div className="container-image">
                    <img src={data.bannerURI} alt="" />
                </div>
                :
                ""
            }


            <div className="container-name-project">
                <div className="name-project">
                    <h2>{data.name}</h2>

                    {data.openSource ? <span>(Open source)</span> : ""}

                </div>
                <Icon name="edit" onClick={() => { openCloseModal(); EditProject() }} />

            </div>

            <div className="container-description-project">
                {
                    data.desc ? <p>{data.desc}</p> : ""
                }
                
            </div>

            <div className="container-participants">

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
                    <a href={UrlRepoGithubProject}>
                        <img src="assets/icons/github.svg" alt="" />
                        github
                    </a>
                </div>
                <div className="container-interaction-project">

                    <Button onClick={toggleHeart}>
                        <Icon name="favorite" id={`${liked ? 'already-hearted' : ''}`} />
                    </Button>
                    <span>{
                        (liked && !data.alreadyHearted) ? (data?.hearts||[]).length + 1 : (!liked && data.alreadyHearted) ? (data?.hearts||[]).length - 1 : (data?.hearts||[]).length
                    }</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard