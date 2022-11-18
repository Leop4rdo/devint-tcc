import CreateProjects from "components/layout/Modals/CreateProjects";
import NewContents from "components/layout/NewContents/NewContents";
import Project from "components/Project";
import React, { useState } from "react";


interface IProjectTab {
    devId: string
}

const ProjectsTabs: React.FC<IProjectTab> = ({ devId }) => {

    const [writtingProject, setWrittingProject] = useState(false)

    return (
        <>
            <NewContents catchphrase="Compartilhe seus projetos com a comunidade !" newContentName="Novo projeto" />

            
                <CreateProjects/>
            

            <Project/>
        </>




    )
}

export default ProjectsTabs