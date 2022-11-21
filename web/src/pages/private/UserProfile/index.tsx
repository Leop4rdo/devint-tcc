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
import PostsTab from "components/ProfileTabs/Posts/Posts";
import ProjectsTabs from "components/ProfileTabs/Projects/Projects"; 
import firebase from "config/firebase";
import AutoTextArea from "components/shared/TextArea";
import { dateMask } from "utils/masks";
import { isValidDate } from "utils/validations";
import { setEnvironmentData } from "worker_threads";
import DetailSection from "components/ProfileSections/DetailSection";

const UserProfilePage: React.FC = () => {

    const [newImage, setNewImage] = useState<string[]>([])
    const [uploading, setUploading] = useState(false);
    const [currentTab, setCurrentTab] = useState("postsTab");
    const authContext = useContext(AuthContext)
    const [editing, setEditing] = useState(false)

    const [dev, setDev] = useState<IDev | null>(null)
    const { devId } = useParams()
    const [select, setSelectSkill] = useState()
    const [following, setFollowing] = useState(false);

    const updateUser = async (body : IDev) => {
        const _body : IDev = {
            ...body,
            birthday : body.birthday.split('/').reverse().join('-')
        }

        const res = await devService.update(_body as any, body.id!)

        setDev({
            ...res.data,
            birthday : res.data.birthday.split('-').reverse().join('/')
        })
    }

    const uploadImage = async (evt : any) => {
        setUploading(true)

        const file = evt.target.files[0]

        if (!file)
            return

        try {
            const extension = `.${file.name.split('.')[1]}`
            const fileName = `${evt.target.name}-${dev!.id!}`
            const uploaded = await firebase.storage().ref().child(`${evt.target.name}/`).child(fileName).put(file)

            const downloadURL = await uploaded.ref.getDownloadURL()
            
            const updateData = {
                ...dev!, 
                profilePicUrl : (evt.target.name == 'profile') ? downloadURL : dev?.profilePicUrl!,
                bannerURI : (evt.target.name == 'banner') ? downloadURL : dev?.bannerURI!
            }

            
            setDev(updateData)
            updateUser(updateData)

        } catch (err) {
            console.log(err);
            alert('Houve um erro inesperado ao fazer upload!')
            
        } finally {
            setUploading(false)
        }
        
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

        setDev({
            ...res.data,
            birthday: res.data.birthday.split('-').reverse().join('/')
        })
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

    const handleInputChange = (e : any) => {
        setDev({
            ...dev!,
            [e.target.name]: e.target.value
        })
    }

    const toggleEditing = () => {
        if (editing)
            updateUser(dev!)

        setEditing(!editing)    
    }

    const getDevs = async () => {
        const res = await devService.list({ limit: 24 })

        setSelectSkill(res.data)
    }

    return (
        <MenuWapper>
            <div className="profile-page">
                <div className="background-image">
                    {
                        (authContext?.userData?.id == devId) ?
                            <div className="upload-new-image">
                                <input accept="image/*" type="file" name="banner" id="attachment-input" onClick={uploadImage}/>
                                <label htmlFor="attachment-input"><Icon name="image"  /></label>
                            </div>

                            : ''
                    }
                    <img src={dev?.bannerURI} />
                </div>

                <div className="container-user-informations">

                    <div className="profile-info">

                        <img src={dev?.profilePicUrl} className="profile-pic" onClick={() => {uploadImage("profile")}}/>
                        
                        <h2>{dev?.name}</h2>

                        {dev?.githubUsername ?
                            <span>
                                {dev?.githubUsername}
                            </span>
                            : ''
                        }

                        <div className="bio-edit">
                            <Icon name={editing? "check" : "edit"} onClick={() => setEditing(!editing)} />
                            { (editing) ?
                                    <AutoTextArea name="bio" onChange={(evt) => handleInputChange} placeholder="Conte um pouco sobre você" />
                                :
                                dev?.bio ? dev.bio : 
                                <p>Olá, meu nome é {dev?.name}</p>
                            }
                        </div>    

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
                    
                    {dev && <DetailSection canEdit={authContext?.userData.id == dev?.id} data={dev as IDev} onFinishEditing={updateUser} />}

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

                        {currentTab === "projectsTab" ? <ProjectsTabs devId={devId || ''}/>
                         : ""}
                    </div>
                </div>

            </div>

        </MenuWapper>

    )


}


export default UserProfilePage