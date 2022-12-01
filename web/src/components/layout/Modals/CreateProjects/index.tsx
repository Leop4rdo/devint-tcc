import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import Input from "components/shared/Input";
import TextArea from "components/shared/TextArea";
import * as projectService from 'services/project.service';
import React, { useState, useEffect , useContext} from "react";
import * as devService from "services/dev.service"
import IDevMinimal from "interfaces/IDev";
import Select from "components/shared/Select";
import { v4 as randomUUIDV4 } from "uuid"
import firebase from "config/firebase"
import { AuthContext } from "store/context/Auth.context";

interface ICreateProjects {
    openCloseModal: any
    userId: string
    refreshPage: any
    editProject: boolean
    IdProject: string
}

const CreateProjects: React.FC<ICreateProjects> = ({ openCloseModal, userId, refreshPage, editProject, IdProject }) => {
    const [searchUsers, setsearchUsers] = useState<IDevMinimal[]>([])
    const [dataGithubRepo, setdataGithubRepo] = useState([])
    const [selectdNameRepository, setSelectdNameRepository] = useState()
    const [checkBoxValue, setCheckBoxValue] = useState()
    const [attachments, setAttachments] = useState<string[]>([])
    const authContext = useContext(AuthContext)
    const [formValues, setFormValues] = useState({
        name: "",
        nameGithubUsers: "",
        desc: "",
        members : [
            authContext?.userData
        ],
        openSource : false

    })

    const handleTextChange = (value: any, key: keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key]: value.target.value
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

        if (!formValues.name || !formValues.desc || !selectdNameRepository || !attachments)
            return

        const UrlRepositoryGit = `https://github.com/${selectdNameRepository}`

        const body = {
            name: formValues.name,
            bannerURI: attachments[0],
            githubRepository: {
                url: UrlRepositoryGit,
                name: selectdNameRepository
            },
            members: formValues.members,
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
        
    }


    const DeleteProject = async () => {
        if (window.confirm('Deletar esse projeto cortará qualquer relação com os posts existentes, tem certeza que deseja deletar esse projeto?')) {
            await projectService.DeleteById(IdProject)
            openCloseModal()
            refreshPage()
        }

    }


    const getByidProjects = async () => {

        if (editProject) {
            const { data } = await projectService.GetByIdProject(IdProject)
            setFormValues({
                name: data.name,
                nameGithubUsers: "",
                desc: data.desc,
                members: data.members,
                openSource : data.openSource
            })
            
            setCheckBoxValue(data.openSource)
            setAttachments(data.bannerURI)
            setSelectdNameRepository(data.githubRepository.name)
        }
    }

    const addTeamMember = (member : IDevMinimal) => {
        
        if (member.id === authContext?.userData.id)
            return

        if (formValues.members.find(m => m.id === member.id))
            return
            
        setFormValues({
            ...formValues,
            members : [...formValues.members, member]
        })

        

    }

    const removeTeamMember = (member : IDevMinimal) => {
        if (member.id === authContext?.userData.id)
            return

        setFormValues({
            ...formValues,
            members : formValues.members.filter((m) => m.id != member.id)
        })

        
    }

    

    useEffect(() => { getUserData(); getByidProjects() }, [])

   
    

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
                                <img src={`${attachments}`} alt="" /> :
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
                            value={formValues.name}
                            name="name"
                            onChange={(value) => handleTextChange(value, 'name')}
                        />
                        <div className="data-github">
                            <Select  onChange={(selectd: any) => {
                                setSelectdNameRepository(selectd.target.value)
                            }}>
                                <option>Selecione um Repositório</option>

                                {editProject &&
                                    <option selected value={selectdNameRepository}>{selectdNameRepository}</option>
                                }

                                {dataGithubRepo &&
                                    dataGithubRepo.map((data: any) => (
                                        <option key={data.id} value={data.full_name}>{data.full_name}</option>

                                    ))
                                }
                            </Select>
                            <span>Open Source</span>
                            <div className="toggle-button">
                                <input type="checkbox" id="chk" onChange={() => setFormValues({ ...formValues, openSource: !formValues.openSource})} />
                                <label  htmlFor="chk" className="switch">
                                    <span className="slider"></span>
                                </label>
                            </div>

                        </div>

                        <TextArea
                            value={formValues.desc}  
                            placeholder="Descrição"
                            onChange={(value: string) => handleTextChange(value, 'desc')}
                        />
                        <div className="container-participants-github">
                            <Input placeholder="Participantes do projeto"
                                value={formValues.nameGithubUsers}
                                onChange={(value) => handleTextChange(value, 'nameGithubUsers')}
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

                                                    <div className="conatiner-users-github" >
                                                        <div className="users-github" onClick={() => addTeamMember(users)}>
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

                         {formValues.members &&
                            formValues.members.map((member : IDevMinimal) => (
                                <div className="conatiner-participants-project">
                                <div className="participants-project">
                                    <div className="participants">
                                        <div className="image">
                                            <img src={member.profilePicUrl} />
                                        </div>
                                        <div className="container-information-participants">
                                            <div className="developer-name">
                                                <span>{member.name}</span>
                                            </div>
                                            <div className="developer-github">
                                                <span >{member.githubUsername}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Icon name="delete_forever" onClick={() => removeTeamMember(member)}/>
                            </div>
                            ))
                        
                        
                            
                        
                            
                        } 
                        
                        </div>
                    </div>

                    <div className="container-button-create-project">
                        <Button onClick={publishProject} className="btn-primary" children={"Criar Projeto"} />

                        {
                            editProject &&
                            <Button className="btn-delete" onClick={DeleteProject} >
                                Deletar
                                <Icon name="delete_forever" />
                            </Button>
                        }


                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreateProjects