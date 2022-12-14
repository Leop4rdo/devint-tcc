import CreateProjects from "components/layout/Modals/CreateProjects";
import NewContents from "components/layout/NewContents/NewContents";
import Project from "components/Project";
import React, { useState, useEffect , useContext } from "react";
import IProjectProps from "interfaces/IProject"
import * as projectService from 'services/project.service';
import { useParams } from "react-router-dom";
import Semicolon from "components/shared/Semicolon";
import { AuthContext } from "store/context/Auth.context";


interface IProjectTab {
    devId: string
    canEdit ?: boolean
}

const ProjectsTabs: React.FC<IProjectTab> = (props) => {

    const [writtingProject, setWrittingProject] = useState(false)
    const [projects, setProjects] = useState<IProjectProps[]>([])
    const [editProject , setEditProject] = useState(false)
    const [idProject , setIdProject] = useState('')
    const authContext = useContext(AuthContext)

    const { devId } = useParams()

    const ModalProject = () => {
        if (writtingProject)
            setWrittingProject(false)
        else
            setWrittingProject(true)
            setEditProject(false)
    }

    const getProjects = async () => {
        if (!devId) return

        setProjects([])
        const { data } = await projectService.getProjectByUser(devId)
        setProjects(data)
           
    }
    const EditProject = () => {
        if(!editProject)
            setEditProject(true)    
    }

    
    useEffect(() => { getProjects(); }, [devId])

    console.log(authContext?.userData.Id === devId ?  
        'true'
        : 'false')

    console.log(authContext?.userData.id === devId)

    return (
        <>

            {
                props.canEdit && 
                <NewContents catchphrase="Compartilhe seus projetos com a comunidade !" newContentName="Novo projeto" openCloseModal={ModalProject} />
            }

            {writtingProject &&
                <CreateProjects IdProject={idProject} openCloseModal={ModalProject} userId={devId!} refreshPage={getProjects} editProject={editProject} />
            }
            {
                projects?.map((project: IProjectProps) =>
                    <>
                        <Project 
                            EditProject={EditProject} 
                            key={`${project.id}-${Math.random() * 999}`} 
                            data={project} 
                            canEdit={props.canEdit}
                            openCloseModal={() => {
                                ModalProject()
                                setIdProject(`${project.id}`)
                            }} 
                        />
                    </>
                )
            }
            <Semicolon />
        </>
    )
}

export default ProjectsTabs