import MenuWapper from "components/layout/MenuWrapper";
import UserProfileEdit from "components/layout/UserProfileEdit";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import IDevMinimal from "interfaces/IDev";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "store/context/Auth.context";
import * as devService from "../../../services/dev.service"

const UserProfilePage: React.FC = () => {
    const [dev, setDev] = useState<IDevMinimal | null>(null)
    const authContext = useContext(AuthContext)
    const { devId } = useParams()
    
    const [following, setFollowing] = useState(false);

    const toggleFollow = async () => {
        if (!devId) return

        const res = await devService.toggleFollow(devId)
        
        setFollowing(!following);
    }
    console.log(devId);

    const findById = async () => {

        if (!devId) return 
        const res = await devService.findById(devId)

        setDev(res.data)
        
    }
    
    useEffect(() => { findById() }, [devId])
    

    return (
        <MenuWapper>
            <div className="profile-page">

                <div className="background-image"></div>

                <div className="container-user-informations">

                    <div className="main-profile-info">

                        <div className="edit-main-info">
                            <Icon name="edit"/>
                        </div>

                        <img src={dev?.profilePicUrl} className="profile-pic"/>

                        <h2>{dev?.name}</h2>

                        {
                            (dev?.githubUsername) ? 
                                <span>
                                    <img src="assets/icons/github.svg" alt="" />
                                    {dev?.githubUsername}
                                </span>
                            : ''
                        }

                        <p>Bio muito bunita feita para exemplificar uns bagui ai
                            tipo... alguma coisa</p>

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
                                    <span>{following ? "Seguindo" : "Seguir"}</span>
                                    <Icon name={following ? "check": "add"} />
                                </Button> : ''
                        }


                    </div>

                    <UserProfileEdit iconName="forum" subject="Contatos">

                        <div className="user-info">
                            <Icon name="email" />
                            <span>emailqualddddddddddddddddddquer@gmail.com</span>
                        </div>

                        <div className="user-info">
                            <Icon name="call" />
                            <span>(11) 4954-5965</span>
                        </div>

                    </UserProfileEdit>

                    <UserProfileEdit iconName="group" subject="Sobre" >

                            <div className="user-info">
                                <Icon name="calendar_month" />
                                <span>14/01/2001</span>
                            </div>

                            <div className="user-info">
                                <Icon name="group" />
                                <span>Masculino</span>
                            </div>

                            <div className="user-info">
                                <img src="assets/icons/github.svg" alt="" />
                                <span>Ezequiel-Mathias</span>
                            </div>

                    </UserProfileEdit>

                    <UserProfileEdit iconName="center_focus_weak" subject="Foco de carreira" >

                        <div className="user-info">
                            <span>Front-End</span>
                        </div>

                    </UserProfileEdit>

                    <UserProfileEdit iconName="work" subject="Trabalho Atual" >
                        <div className="user-info">
                            <span>Front-end</span>
                        </div>
                    </UserProfileEdit>

                    <UserProfileEdit iconName="school" subject="Senioridade">
                        <div className="user-info">
                            <span>Junior</span>
                        </div>
                    </UserProfileEdit>


                    <UserProfileEdit iconName="star" subject="Habilidades">
                        <div className="skill-user">
                            <div className="container-skill-user">
                                <div className="container-skill">
                                    <Icon name="star" />
                                    <span>Html e css</span>
                                </div>
                            </div>

                            <div className="container-skill-user">
                                <div className="container-skill">
                                    <Icon name="star" />
                                    <span>Html e css</span>
                                </div>
                            </div>
                            <div className="container-skill-user">
                                <div className="container-skill">
                                    <Icon name="star" />
                                    <span>Html e css</span>
                                </div>
                            </div>
                        </div>

                    </UserProfileEdit>


                    <UserProfileEdit iconName="push_pin" subject="Outros links">

                        <div className="container-links">
                            <div className="links">
                                <span>Link qualquer</span>
                            </div>

                            <div className="links">
                                <span>Link qualquer</span>
                            </div>

                            <div className="links">
                                <span>Link qualquer</span>
                            </div>
                            <div className="links">
                                <span>Link qualquer</span>
                            </div>
                        </div>

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