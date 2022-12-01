import Icon from "components/shared/Icon";
import React , {useState , useEffect} from "react";
import Button from "components/shared/Button";
import IProjectProps from "interfaces/IProject";
import * as projectService from 'services/project.service';
interface IProject {
    openCloseModal: any
    data: IProjectProps
    EditProject : any
    idProject : any
}

const Project: React.FC<IProject> = ({ data, openCloseModal , EditProject , idProject}) => 
{
    const [UrlRepoGithubProject , setUrlRepoGithubProject] = useState()
    
    const getUrlGithubRepo = async () => {
        const {data} = await projectService.findById(idProject)

        setUrlRepoGithubProject(data.githubRepository.url)
    }

    useEffect(() => {getUrlGithubRepo(); }, [])
    
    return (
        <div className="container-project" >
            <div className="container-image">
                <img src={data.bannerURI} alt="" />
            </div>

            <div className="container-name-project">
                <div className="name-project">
                    <h2>{data.name}</h2>

                    {data.openSource ? <span>(Open source)</span> : <span>(Closed source)</span>}

                </div>
                <Icon name="edit" onClick={() => {openCloseModal() ; EditProject()}} />

            </div>

            <div className="container-description-project">
                <p>{data.desc}</p>
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
                    <img src="../assets/icons/github.svg" alt=""  />
                        github 
                        
                        </a>
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