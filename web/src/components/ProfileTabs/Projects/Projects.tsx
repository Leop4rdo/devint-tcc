import CreateProjects from "components/layout/Modals/CreateProjects";
import NewContents from "components/layout/NewContents/NewContents";
import Project from "components/Project";
import React, { useState, useEffect } from "react";
import IProjectProps from "interfaces/IProject"
import * as projectService from 'services/project.service';


interface IProjectTab {
    devId: string
}

const ProjectsTabs: React.FC<IProjectTab> = ({ devId }) => {

    const [writtingProject, setWrittingProject] = useState(false)
    const [projects, setProjects] = useState<IProjectProps[]>([])
    const [editProject , setEditProject] = useState(false)
    const [idProject , setIdProject] = useState('')


    const ModalProject = () => {
        if (writtingProject)
            setWrittingProject(false)
        else
            setWrittingProject(true)
            setEditProject(false)
    }

    const getProjects = async () => {
        setProjects([])
        const { data } = await projectService.getProjectByUser(devId)
        setProjects(data)
        
        
    }

    const EditProject = () => {
        if(!editProject)
            setEditProject(true)    
    }

    
    useEffect(() => { getProjects(); }, [])

    return (
        <>


            <NewContents catchphrase="Compartilhe seus projetos com a comunidade !" newContentName="Novo projeto" openCloseModal={ModalProject} />

            {writtingProject &&
                <CreateProjects IdProject={idProject} openCloseModal={ModalProject} userId={devId} refreshPage={getProjects} editProject={editProject} />
            }


            {
                projects?.map((project: IProjectProps) =>
                    <>
                        <Project EditProject={EditProject} key={`${project.id}-${Math.random() * 999}`} data={project} idProject={project.id} openCloseModal={() => {
                            ModalProject()
                            setIdProject(`${project.id}`)
                        }
                        } />

                    </>
                )
            }


        </>




    )
}

export default ProjectsTabs