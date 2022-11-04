import MenuWapper from "components/layout/MenuWrapper";
import UserProfileEdit from "components/layout/UserProfileEdit";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import IDevMinimal from "interfaces/IDev";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "store/context/Auth.context";
import * as devService from "../../../services/dev.service"
import Input from "components/shared/Input";
import Select from "components/shared/Select";
import AutoTextArea from "components/shared/TextArea";
import { isValidDate, isValidEmail } from "utils/validations";
import { validate } from "uuid";
import { dateMask } from "utils/masks";


const UserProfilePage: React.FC = () => {
    const [dev, setDev] = useState<IDevMinimal | null>(null)
    const authContext = useContext(AuthContext)
    const { devId } = useParams()
    const [select, setSelectSkill] = useState()
    const [following, setFollowing] = useState(false);

    const toggleFollow = async () => {
        if (!devId) return

        const res = await devService.toggleFollow(devId)

        setFollowing(!following);
    }
    // console.log(devId);

    const findById = async () => {

        if (!devId) return
        const res = await devService.findById(devId)

        setDev(res.data)
        //   console.log(res.data);
    }

    useEffect(() => { findById() }, [devId])

    const getDevs = async () => {
        const res = await devService.list({ limit: 24 })

        setSelectSkill(res.data)
    }

    /* const editContact = async () => {
        const res = await devService.update({
            name: "",
            bio: "",
            gender: "",
            profilePicUrl: "",
            currentJob: "",
            githubUsername: "",
            openToWork: true,
            birthday: Date,
            socialLinks: {
                name: "",
                url: "",
                owner: ""
            },
            careerFocus: { id: "" },
            autoDeclaredSeniority: { id: "" },
            skills: { id: " " },[]
        }, 5)
    } */


    const handleInputChange = (text: any, key: any) => {
        setFormValues({
            ...formValues,
            [key]: text.target.value
        })
    }


    const [formValues, setFormValues] = useState({
        bio: "",
        contacts: "",
        aboutCalendarMonth: "",
        aboutSex: "",
        careerFocus: "",
        currentJob: "",
        seniority: "",
        skills: "",
        linkName: "",
        link: ""
    })

    /* console.log(formValues.contacts) */

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

    return (
        <MenuWapper>
            <div className="profile-page">

                <div className="background-image"></div>

                <div className="container-user-informations">

                    <div className="profile-info">

                        <div className="edit-info">
                            {edit.bio ?
                                <Icon name="done" onClick={() => setEdit({ ...edit, bio: !edit.bio })} />
                                :
                                <Icon name="edit" onClick={() => setEdit({ ...edit, bio: !edit.bio })} />
                            }

                        </div>

                        <img src={dev?.profilePicUrl} className="profile-pic" />

                        <h2>{dev?.name}</h2>

                        {
                            (dev?.githubUsername) ?
                                <span>
                                    <img src="assets/icons/github.svg" alt="" />
                                    {dev?.githubUsername}
                                </span>
                                : ''
                        }


                        {edit.bio ?
                            <AutoTextArea >
                                Bio muito bunita feita para exemplificar uns bagui ai
                                tipo... alguma coisa
                            </AutoTextArea>
                            :
                            <p>Bio muito bunita feita para exemplificar uns bagui ai
                                tipo... alguma coisa</p>
                        }


                        <div className="container-follower-data">
                            <div className="container-followers">
                                <span>43</span>
                                <p>Seguidores</p>
                            </div>
                            <div className="container-following">
                                <span>45</span>
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
                            <span>emailqualddddddddddddddddddquer@gmail.com</span>
                        </div>

                    </UserProfileEdit>

                    <UserProfileEdit editIcon={edit.about} OnClick={() => setEdit({ ...edit, about: !edit.about })} iconName="group" subject="Sobre" >

                        <div className="user-info">
                            <Icon name="calendar_month" />
                            {edit.about ?
                                <Input
                                    value={dateMask(formValues.aboutCalendarMonth)}
                                    onChange={(text: any) =>
                                        handleInputChange(text, 'aboutCalendarMonth')}
                                    validate={() => isValidDate(formValues.aboutCalendarMonth)}
                                />
                                :
                                <span>14/01/2001</span>
                            }

                        </div>

                        <div className="user-info">
                            <Icon name="group" />
                            {edit.about ?
                                <Select onChange={() => { }}>
                                    <option > Sexo </option>
                                    <option> Masculino </option>
                                    <option> Feminino </option>
                                    <option> Outro </option>
                                </Select>
                                :
                                <span>Masculino</span>
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
                                <span>Front-End</span>
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
                                <span>Front-End</span>
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
                                <span>Junior</span>
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

                <div className="post-tabs-container">
                    <div className="posts-tabs">
                        <h4>Posts</h4>
                        <h4>Artigos</h4>
                        <h4>Projetos</h4>
                    </div>
                    <hr></hr>
                </div>

            </div>

        </MenuWapper>

    )


}


export default UserProfilePage