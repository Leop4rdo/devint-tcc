import MenuWapper from "components/layout/MenuWrapper";
import React, { useEffect, useState } from "react";
import Icon from "components/shared/Icon";
import * as postService from "../../../services/post.service"
import * as projectService from "../../../services/project.service"
import { useParams } from "react-router-dom";
import Project from "interfaces/IProject"
import { IPostListItem} from "interfaces/IPost";
import Post from "components/Post";
import PostDetailsModal from "components/layout/Modals/PostDetailsModal";

interface ProjectDetails {
    feedType? : 'random' | 'latest' | 'trending'
}
const ProjectDetails: React.FC<ProjectDetails> = ({feedType}) => {
    const [dataProject, setDataProject] = useState<Project>()
    const [dataProjectPost, setDataProjectPost] = useState<IPostListItem[]>([])
    const { IdProject } = useParams()
    const [selectedPostId, setSelectedPostId] = useState('')
    const [posts, setPosts] = useState<IPostListItem[]>([])

    const getProject = async () => {
        const { data } = await projectService.GetByIdProject(`${IdProject}`)
        setDataProject(data)
    }

    const getPost = async () => {
        const { data } = await postService.listProjectPosts(`${IdProject}`)
        setDataProjectPost(data)

    }

    const refresh = async () => {
        setPosts([])

        const { data } = await postService.list({ limit: 48, offset: 0, order : feedType || 'random'  })

        setPosts(data)
    }

    useEffect(() => { getProject(); getPost() }, [])


    return (
        <MenuWapper>
            <div className="container-page-project-details">

                <div className="container-projetc-details">
                    <div className="container-title-project">
                        <div className="title">
                            <span>{dataProject?.name}</span>
                        </div>
                        <div className="hearts">
                            <span>{dataProject?.hearts?.length}</span>
                            <Icon name="favorite" />
                        </div>
                    </div>

                    <div className="container-image-Project">
                        <div className="image-project">
                            <img src={dataProject?.bannerURI} alt="" />
                        </div>

                    </div>

                    <div className="container-descrição">

                        <span>{dataProject?.desc}</span>

                    </div>

                    <div className="container-members">
                        <span>Membros</span>

                        <div className="container-members-image">

                            {dataProject?.members.map((data) => (
                                <div className="members-image">
                                    <img src={data.profilePicUrl} alt="" />
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className="container-posts">

                        {dataProjectPost?.map((data) => (
                             <Post key={`${data.id}-${Math.random() * 999}`} data={data} openDetails={() => setSelectedPostId(data.id)} />
                        ))}

                    </div>

                </div>
            </div>


            {
                selectedPostId &&
                <PostDetailsModal  postId={selectedPostId} onClick={() => setSelectedPostId('')} refreshComment={refresh} />
            }
        </MenuWapper>

        

    )

}


export default ProjectDetails