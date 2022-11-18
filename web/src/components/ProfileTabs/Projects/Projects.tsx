import NewContents from "components/layout/NewContents/NewContents";
import Project from "components/Project";
import React from "react";


interface IProjectTab {
    devId: string
}

const ProjectsTabs: React.FC<IProjectTab> = ({ devId }) => {

    return (
        <>
            <NewContents catchphrase="Compartilhe seus projetos com a comunidade !" newContentName="Novo projeto" />

            <Project/>
        </>




    )
}

export default ProjectsTabs