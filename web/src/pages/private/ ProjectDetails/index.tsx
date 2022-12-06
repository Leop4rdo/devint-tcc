import MenuWapper from "components/layout/MenuWrapper";
import React from "react";
import Icon from "components/shared/Icon";
import * as postService from "../../../services/post.service"

const ProjectDetails: React.FC = () => {


    const giveLike = async () => {
      /* const {data}  =  await postService.listProjectPosts() */

        
    }
    return (
        <MenuWapper>
            <div className="container-page-project-details">

                <div className="container-projetc-details">
                    <div className="container-title-project">
                        <div className="title">
                            <span>Titulo Do projeto</span>
                        </div>
                        <div className="hearts">
                            <span>100</span>
                            <Icon name="favorite" />
                        </div>
                    </div>

                    <div className="container-image-Project">
                        <div className="image-project">

                        </div>

                    </div>

                    <div className="container-descrição">

                        <span>Descricaooooodmlkmd,;lam;lsma;lmd;am;adma;slma;slmas;lmsad;lmas;msa;modal;aslmsad;mad;sdam
                            ;adssa;lmas;adma;md;askda;kda;lskd;alslksa;ksd;lsak;ask;adk;sadkas;ka;dk;sak;slads;akd;lks;lkdsa;lk;sla,;aldksa;lka;lksad;lasdks;alksa;lakasklsad;l
                            ksksamkmdkdmsldkmalkmasdkm
                        </span>

                    </div>

                    <div className="container-members">
                        <span>Membros</span>

                        <div className="container-members-image">
                            <div className="members-image">

                            </div>

                            <div className="members-image">

                            </div>


                            <div className="members-image">

                            </div>

                            <div className="members-image">

                            </div>

                            <div className="members-image">

                            </div>

                            <div className="members-image">

                            </div>

                            <div className="members-image">

                            </div>

                            <div className="members-image">

                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </MenuWapper>

    )

}


export default ProjectDetails