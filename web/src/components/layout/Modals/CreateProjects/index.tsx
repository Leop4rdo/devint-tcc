import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import Input from "components/shared/Input";
import TextArea from "components/shared/TextArea";
import * as projectService from 'services/project.service';
import React, { useState, useEffect } from "react";
import * as devService from "services/dev.service"
import IDevMinimal from "interfaces/IDev";
import Select from "components/shared/Select";
import { v4 as randomUUIDV4 } from "uuid"
import firebase from "config/firebase"

interface ICreateProjects {
    openCloseModal: any
    userId: string
    refreshPage: any
}

const CreateProjects: React.FC<ICreateProjects> = ({ openCloseModal, userId, refreshPage }) => {
    const [searchUsers, setsearchUsers] = useState<IDevMinimal[]>([])
    const [dataGithubRepo, setdataGithubRepo] = useState([])
    const [selectdNameRepository, setSelectdNameRepository] = useState()
    const [checkBoxValue, setCheckBoxValue] = useState()
    const [attachments, setAttachments] = useState<string[]>([])
    const [uploading, setUploading] = useState(false);


    const [formValues, setFormValues] = useState({
        name: "",
        githubRepo: "",
        nameGithubUsers: "",
        openSource: "",
        desc: "",

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

    const getUserData = async () => {

        const { data } = await devService.findById(userId)

        RepositoriesGithubUser(data.githubUsername)

    }


    const RepositoriesGithubUser = async (nameUserGitHub: string) => {
        if (nameUserGitHub.length > 3) {
            fetch(`https://api.github.com/users/${nameUserGitHub}/repos`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resposta) => resposta.json())
                .then((data) => {
                    setdataGithubRepo(data)
                })
                .catch((error) => {
                    console.log(error)

                })
        }

    }

    const publishProject = async () => {

        if (!formValues.name || !formValues.desc || !selectdNameRepository)
            return

        const UrlRepositoryGit = `https://github.com/${selectdNameRepository}`

        const body = {
            name: formValues.name,
            bannerURI: attachments[0],
            githubRepository: {
                url: UrlRepositoryGit,
                name: selectdNameRepository
            },
            openSource: checkBoxValue,
            desc: formValues.desc
        }

        const res = await projectService.create(body)

        if (res.hasError)
            return alert('Houve um erro inesperado ao publicar, tente novamente mais tarde!')
        
        openCloseModal(false)
        refreshPage()
        
    }


    const upload = async (evt: any) => {
        setUploading(true)

        const file = evt.target.files[0]

        if (!file) return

        try {
            const extension = `.${file.name.split('.')[1]}`
            const fileName = randomUUIDV4() + extension
            const uploaded = await firebase.storage().ref().child('attachments/').child(fileName).put(file)
            setAttachments([
                await uploaded.ref.getDownloadURL()
            ])
        } catch (err) {
            console.log(err)
            alert('Houve um erro inesperado ao fazer upload!')
        }


        setUploading(false)
        

    }



    useEffect(() => { getUserData() }, [])



    return (
        <div className="modal-container-global">
            <div className="container-elements">
                <div className="elements">
                    <div className="title-project">
                        <h1>Novo Projeto</h1>
                        <Icon name="close" onClick={openCloseModal} />
                    </div>

                    <div className="container-image">


                        <div className="attachment-list">
                            {attachments[0] ?
                                <img src={attachments[0]} alt="" /> :
                                <div className="container-image-not-selected">
                                </div>}
                        </div>

                        <div className="container-input-file">
                            <label htmlFor="input-file">
                                <Icon name="add_a_photo" />
                            </label>
                            <input accept="image/*" onChange={upload} type="file" name="input-file" id="input-file" />
                        </div>


                    </div>

                    <div className="container-data-filling">

                        <Input placeholder="Nome"
                            name="name"
                            onChange={handleChange}
                        />
                        <div className="data-github">
                            <Select onChange={(selectd: any) => {
                                setSelectdNameRepository(selectd.target.value)

                            }}>
                                <option>Selecione um Repositório</option>

                                {dataGithubRepo &&
                                    dataGithubRepo.map((data: any) => (
                                        <option key={data.id} value={data.full_name}>{data.full_name}</option>

                                    ))
                                }

                            </Select>
                            <span>Open Source</span>

                            <div className="toggle-button">
                                <input type="checkbox" id="chk" onChange={(value: any) => setCheckBoxValue(value.target.checked)} />
                                <label htmlFor="chk" className="switch">
                                    <span className="slider"></span>
                                </label>
                            </div>

                        </div>

                        <TextArea placeholder="Descrição" onChange={handleChange} name={"desc"} />
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

                    <div className="container-button-create-project">
                        <Button onClick={publishProject} className="btn-primary" children={"Criar Projeto"} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreateProjects