import CreateProjects from "components/layout/Modals/CreateProjects";
import NewContents from "components/layout/NewContents/NewContents";
import Project from "components/Project";
import React, { useState } from "react";


interface IProjectTab {
    devId: string
}

const ProjectsTabs: React.FC<IProjectTab> = ({ devId }) => {

    const [writtingProject, setWrittingProject] = useState(false)

    const ModalProject = () => {
        if (writtingProject)
            setWrittingProject(false)
        else
            setWrittingProject(true)
    }

    return (
        <>
            <NewContents catchphrase="Compartilhe seus projetos com a comunidade !" newContentName="Novo projeto" openCloseModal={ModalProject} />

            {writtingProject &&
                <CreateProjects openCloseModal={ModalProject} />
            }



            <Project openCloseModal={ModalProject}/>
        </>




    )
}

export default ProjectsTabs