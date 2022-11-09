import MenuWapper from "components/layout/MenuWrapper";
import UserProfileEdit from "components/layout/UserProfileEdit";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import IDevMinimal, { IDev } from "interfaces/IDev";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "store/context/Auth.context";
import * as devService from "../../../services/dev.service";
import Input from "components/shared/Input";
import Select from "components/shared/Select";
import PostsTab from "components/ProfileTabs/Posts";
import { v4 as randomUUIDV4 } from "uuid"
import firebase from "config/firebase";
import AutoTextArea from "components/shared/TextArea";
import { isValidDate, isValidEmail } from "utils/validations";
import { dateMask } from "utils/masks";



const UserProfilePage: React.FC = () => {

    const [bannerImage, setBannerImage] = useState<string[]>([])
    const [uploading, setUploading] = useState(false);
    const [currentTab, setCurrentTab] = useState("postsTab");
    const authContext = useContext(AuthContext)
    const [edit, setEdit] = useState({
        bio: false,
        contacts: false,
        about: false,
        careerFocus: false,
        currentJob: false,
        seniority: false,
        skills: false,
        links: false
    })

    console.log(edit);


    const [dev, setDev] = useState<IDev | null>(null)
    const { devId } = useParams()
    const [select, setSelectSkill] = useState()
    const [following, setFollowing] = useState(false);

    const upload = async (evt: any) => {
        setUploading(true)

        dev?.bannerURI

        const file = evt.target.files[0]

        if (!devId) return

        if (!file) return

        try {
            const extension = `.${file.name.split('.')[1]}`
            const fileName = randomUUIDV4() + extension

            const uploaded = await firebase.storage().ref().child('banner/').child(fileName).put(file)

            setDev({ ...dev, [evt.target.name]: await uploaded.ref.getDownloadURL() } as IDev)
            // update na service
            const res = await devService.update({ bannerURI: uploaded.ref.fullPath }, devId)

            setBannerImage([
                ...bannerImage,
                await uploaded.ref.getDownloadURL()
            ])

            // updateLanguageServiceSourceFile()
        } catch (err) {
            console.log(err)
            alert('Houve um erro inesperado ao fazer upload!')
        }

        setUploading(false)
    }


    const handleTabs = (tabName: string) => {
        if (tabName === "posts") {
            setCurrentTab("postsTab")
        }

        if (tabName === "articles") {
            setCurrentTab("articlesTab")
        }

        if (tabName === "projects") {
            setCurrentTab("projectsTab")
        }
    }

    const findById = async () => {
        if (!devId) return
        const res = await devService.findById(devId)

        setDev(res.data)
        setFollowing(res.data?.followers.find((d: IDevMinimal) => d.id === authContext?.userData.id) != undefined)
    }

    const toggleFollow = async () => {
        if (!devId) return
        const res = await devService.toggleFollow(devId)
        setFollowing(!following);
        const updateFollowing = await devService.findById(devId)
        setDev(updateFollowing.data)
    }

    useEffect(() => { findById() }, [devId])

    const getDevs = async () => {
        const res = await devService.list({ limit: 24 })

        setSelectSkill(res.data)
    }

    const devLegacy = dev

    
    console.log("DEVLEGACY", devLegacy);
    console.log("DEV", dev);
    
    
    const editContact = async () => {
        // let devLegacy = dev;
        // let devChange = formValues;
        
        // let isDevEqual = (JSON.stringify(devLegacy) === JSON.stringify(devChange));
        
        // console.log(isDevEqual);
        
        // if (!isDevEqual) {
        //     let newDevChange = diffObject(devLegacy, devChange);
        //     console.log(diffObject(devLegacy, devChange));
        // }
        
        // function diffObject(a, b) {
        //   return Object.keys(a).reduce(function(map, k) {
        //     if (a[k] !== b[k]) map[k] = b[k];
        //     return map;
        //   }, {});
        // }

        if (!devId) return

        const res = await devService.update({ 
            
                bio: formValues.bio,
                gender: formValues.gender,
                currentJob: formValues.currentJob
            
         }, devId)

    }


    const handleInputChange = (text: any, key: any) => {
        setFormValues({
            ...formValues,
            [key]: text.target.value
            
        })
        
    }

    const [formValues, setFormValues] = useState({
        bio: "",
        gender: "",
        careerFocus: "",
        currentJob: "",
        autoDeclaredSeniority: "",
        skills: "",
        linkName: "",
        link: ""
    })

    return (
        <MenuWapper>
            <div className="profile-page">

                <div className="background-image">
                    <input accept="image/*" onChange={upload} type="file" name="attachment-input" id="attachment-input" />
                    <label htmlFor="attachment-input"><Icon name="image" /></label>
                    {
                        bannerImage.map((uri, idx) =>
                            <img src={uri} key={idx} alt="" />
                        )
                    }
                </div>

                <div className="container-user-informations">

                    <div className="profile-info">

                        <div className="edit-info" >
                            {edit.bio ?
                                <Icon name="done" onClick={() => setEdit({ ...edit, bio: !edit.bio })} />
                                :
                                <Icon name="edit" onClick={() => setEdit({ ...edit, bio: !edit.bio })} />
                            }

                        </div>

                        <img src={dev?.profilePicUrl} className="profile-pic" />
                        
                        <h2>{dev?.name}</h2>

                        {dev?.githubUsername ?
                                <span>     
                                    {dev?.githubUsername}
                                </span>
                                : ''
                        }


                        {edit.bio ?
                            <AutoTextArea onChange={() => handleInputChange} value={formValues.bio}>
                                Conte um pouco sobre você...
                            </AutoTextArea>
                            :
                            dev?.bio ? dev.bio : <p>Olá, meu nome é {dev?.name}</p>
                        }

                        <div className="follow-container">
                            <div className="container-followers">
                                <span>{dev?.followers.length}</span>
                                <p>Seguidores</p>
                            </div>
                            <div className="container-following">
                                <span>{dev?.following.length}</span>
                                <p>Seguindo</p>
                            </div>
                        </div>

                        {
                            (authContext?.userData?.id !== devId) ?
                                <Button className="follow-btn btn-primary" onClick={toggleFollow}>
                                    <Icon name={following ? "check" : "add"} />
                                    <span>{following ? "Seguindo" : "Seguir"}</span>
                                </Button> : ''
                        }


                    </div>

                    <UserProfileEdit iconName="forum" subject="Contato">
                        <div className="user-info">
                            <Icon name="email" />
                            <span>{dev?.email}</span>
                        </div>

                    </UserProfileEdit>

                    <UserProfileEdit editIcon={edit.about} OnClick={() => setEdit({ ...edit, about: !edit.about })} iconName="group" subject="Sobre" >

                        <div className="user-info">
                            <Icon name="calendar_month" />
                            <span>{dev?.birthday}</span>

                        </div>

                        <div className="user-info">
                            <Icon name="group" />
                            {edit.about ?
                                <Select onChange={() => handleInputChange} value={formValues.gender} >
                                    <option > Gênero </option>
                                    <option> Masculino </option>
                                    <option> Feminino </option>
                                    <option> Outro </option>
                                </Select>
                                :
                                <span>{dev?.gender}</span>
                            }

                        </div>

                    </UserProfileEdit>

                    <UserProfileEdit editIcon={edit.careerFocus} OnClick={() => setEdit({ ...edit, careerFocus: !edit.careerFocus })} iconName="center_focus_weak" subject="Foco de carreira" >

                        <div className="user-info">
                            {edit.careerFocus ?
                                <Select onChange={() => { }}>
                                    <option>Selecione um foco de carreira</option>
                                    <option>Front-end</option>
                                    <option>Backend</option>
                                    <option>Full stack</option>
                                </Select>
                                :
                                <span>{dev?.careerFocus ? dev.careerFocus : ''}</span>
                            }
                        </div>

                    </UserProfileEdit>

                    <UserProfileEdit editIcon={edit.currentJob} OnClick={() => setEdit({ ...edit, currentJob: !edit.currentJob })} iconName="work" subject="Trabalho Atual" >
                        <div className="user-info">
                            {edit.currentJob ?
                                <Input value={formValues.currentJob}
                                    onChange={(text: any) =>
                                        handleInputChange(text, 'currentJob')}

                                />
                                :
                                <span>{dev?.currentJob ? dev.currentJob : ''}</span>
                            }
                        </div>
                    </UserProfileEdit>

                    <UserProfileEdit editIcon={edit.seniority} OnClick={() => setEdit({ ...edit, seniority: !edit.seniority })} iconName="school" subject="Senioridade">
                        <div className="user-info">
                            {edit.seniority ?
                                <Select onChange={() => { }}>
                                    <option>Selecione uma Senioridade</option>
                                    <option>Junior</option>
                                    <option>Pleno</option>
                                    <option>Senior</option>
                                </Select>
                                :
                                <span>{dev?.autoDeclaredSeniority ? dev.autoDeclaredSeniority : ''}</span>
                            }
                        </div>
                    </UserProfileEdit>


                    <UserProfileEdit editIcon={edit.skills} OnClick={() => setEdit({ ...edit, skills: !edit.skills })} iconName="star" subject="Habilidades">
                        {edit.skills ?

                            <div>
                                <Select onChange={() => { }}>
                                    <option>Selecione uma Tecnologia</option>
                                    <option> Html </option>
                                    <option> CSS </option>
                                    <option> React Native </option>
                                </Select>

                                <div className="skill-user">
                                    <div className="container-skill-user">
                                        <Icon name="close" />
                                        <div className="container-skill">
                                            <Icon name="star" />
                                            <span>Html e css</span>
                                        </div>
                                    </div>

                                    <div className="container-skill-user">
                                        <Icon name="close" />
                                        <div className="container-skill">
                                            <Icon name="star" />
                                            <span>Html e css</span>
                                        </div>
                                    </div>
                                    <div className="container-skill-user">
                                        <Icon name="close" />
                                        <div className="container-skill">
                                            <Icon name="star" />
                                            <span>Html e css</span>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            :

                            <div className="skill-user">

                                <div className="container-skill-user">
                                    <Icon name="close" />
                                    <div className="container-skill">
                                        <Icon name="star" />
                                        <span>Html e css</span>
                                    </div>
                                </div>

                                <div className="container-skill-user">
                                    <Icon name="close" />
                                    <div className="container-skill">
                                        <Icon name="star" />
                                        <span>Html e css</span>
                                    </div>
                                </div>
                                <div className="container-skill-user">
                                    <Icon name="close" />
                                    <div className="container-skill">
                                        <Icon name="star" />
                                        <span>Html e css</span>
                                    </div>
                                </div>
                            </div>

                        }

                    </UserProfileEdit>

                    <UserProfileEdit editIcon={edit.links} OnClick={() => setEdit({ ...edit, links: !edit.links })} iconName="push_pin" subject="Outros links">

                        {edit.links ?
                            <div>
                                <Input placeholder="Insira o nome do link"
                                    onChange={(text: any) =>
                                        handleInputChange(text, 'linkName')}

                                />
                                <Input placeholder="Insira o Link"
                                    onChange={(text: any) =>
                                        handleInputChange(text, 'link')}

                                />
                            </div>
                            :

                            <div className="container-links">

                                <div className="container-content-links">
                                    <Icon name="close" />
                                    <div className="links">
                                        <span>Link qualquer</span>
                                    </div>
                                </div>


                                <div className="container-content-links">
                                    <Icon name="close" />
                                    <div className="links">
                                        <span>Link qualquer</span>
                                    </div>
                                </div>

                                <div className="container-content-links">
                                    <Icon name="close" />
                                    <div className="links">
                                        <span>Link qualquer</span>
                                    </div>
                                </div>

                                <div className="container-content-links">
                                    <Icon name="close" />
                                    <div className="links">
                                        <span>Link qualquer</span>
                                    </div>
                                </div>
                            </div>

                        }


                    </UserProfileEdit>

                </div>

                <div className="profile-tabs-container">
                    <div className="posts-tabs">
                        <h4 className={currentTab === "postsTab" ? "active" : ""} onClick={() => handleTabs("posts")}>Posts</h4>
                        <h4 className={currentTab === "articlesTab" ? "active" : ""} onClick={() => handleTabs("articles")}>Artigos</h4>
                        <h4 className={currentTab === "projectsTab" ? "active" : ""} onClick={() => handleTabs("projects")}>Projetos</h4>
                    </div>
                    <hr></hr>
                    <div className="selected-tab">
                        {currentTab === "postsTab" ? <PostsTab devId={devId || ''} /> : ""}
                    </div>
                </div>

            </div>

        </MenuWapper>

    )


}


export default UserProfilePage