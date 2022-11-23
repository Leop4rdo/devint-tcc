import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import Input from "components/shared/Input";
import AutoTextArea from "components/shared/TextArea";
import * as projectService from 'services/project.service';
import React, { useState, useEffect } from "react";

import IDevMinimal from "interfaces/IDev";


interface ICreateProjects {
    openCloseModal: any
    postId: string
}

const CreateProjects: React.FC<ICreateProjects> = ({ openCloseModal, postId }) => {

    const [projectbyid, setProjectsbyid] = useState()
    const [searchUsers, setsearchUsers] = useState<IDevMinimal[]>([])
    const [dataGithub, setDataResponseGithub] = useState()

    const getProject = async () => {
        const { data } = await projectService.findById(postId)
        setProjectsbyid(data)
        
    }

    /* getProject() */

    const [formValues, setFormValues] = useState({
        nameGithubUsers: "",

    })

    const handleChange = (e: any) => {

        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })

        getSearchUsers(formValues.nameGithubUsers)

    }


    const getSearchUsers = async (nameUser: string) => {

        if (formValues.nameGithubUsers.length === 0)
            return

        const { data } = await projectService.list({ search: `${nameUser}`, limit: 8 })
        setsearchUsers(data)

        

    }





    return (
        <div className="modal-container-global">
            <div className="container-elements">
                <div className="elements">
                    <div className="title-project">
                        <h1>Novo Projeto</h1>
                        <Icon name="close" onClick={openCloseModal} />
                    </div>

                    <div className="container-image">
                        <img src="https://www.vounajanela.com/wp-content/uploads/2015/03/fotos.jpg" alt="" />
                    </div>

                    <div className="container-data-filling">

                        <Input placeholder="" />
                        <div className="data-github">
                            <Input placeholder="Github" />
                            <span>Open Source</span>

                            <div className="toggle-button">
                                <input type="checkbox" id="chk" />
                                <label htmlFor="chk" className="switch">
                                    <span className="slider"></span>
                                </label>
                            </div>

                        </div>

                        <AutoTextArea placeholder="Descrição" />
                        <div className="container-participants-github">
                            <Input placeholder="Participantes do projeto"
                                name="nameGithubUsers"
                                onChange={handleChange}
                            />
                            <Button className="btn-primary" children={<Icon name="add" />} />
                        </div>


                        {
                            searchUsers.length > 0 && formValues.nameGithubUsers != "" ?
                                <div className="container-search-users-github">
                                    <div className="search-users-github">
                                        <div className="container-scroll-participants-project">


                                            {

                                                searchUsers.map((users) => (

                                                    <div className="conatiner-users-github">
                                                        <div className="users-github">
                                                            <div className="users">
                                                                <div className="image">
                                                                    <img src={users.profilePicUrl} />
                                                                </div>
                                                                <div className="container-information-users-github">
                                                                    <div className="user-name">
                                                                        <span>{users.name}</span>
                                                                    </div>
                                                                    <div className="user-github">
                                                                        <span >{users.githubUsername}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                ))

                                            }

                                        </div>
                                    </div>
                                </div>

                                :

                               ""
                        }


                        <div className="container-scroll-participants-project">

                            <div className="conatiner-participants-project">
                                <div className="participants-project">
                                    <div className="participants">
                                        <div className="image">
                                            <img />
                                        </div>
                                        <div className="container-information-participants">
                                            <div className="developer-name">
                                                <span>Developer_Name</span>
                                            </div>
                                            <div className="developer-github">
                                                <span >Developer_Github</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Icon name="delete_forever" />
                            </div>


                            <div className="conatiner-participants-project">
                                <div className="participants-project">
                                    <div className="participants">
                                        <div className="image">
                                            <img />
                                        </div>
                                        <div className="container-information-participants">
                                            <div className="developer-name">
                                                <span>Developer_Name</span>
                                            </div>
                                            <div className="developer-github">
                                                <span >Developer_Github</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Icon name="delete_forever" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProjects