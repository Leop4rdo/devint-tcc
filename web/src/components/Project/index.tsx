import Icon from "components/shared/Icon";
import React from "react";
import Button from "components/shared/Button";

interface IProject {
    openCloseModal : any
}

const Project: React.FC<IProject> = ({openCloseModal}) => {

    return (
        <div className="container-project">
            <div className="container-image">
                <img src="https://www.vounajanela.com/wp-content/uploads/2015/03/fotos.jpg" alt="" />
            </div>

            <div className="container-name-project">
                <div className="name-project">
                    <h2>Devint NetWork</h2>
                    <span>(open source)</span>
                </div>
                <Icon name="edit" onClick={openCloseModal}/>

            </div>

            <div className="container-description-project">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat lectus in nibh placerat condimentum. Morbi ipsum libero, faucibus ac facilisis vel, aliquet non nisi. Nunc ullamcorper et risus dignissim fringilla. Duis semper molestie arcu, quis ultricies mi interdum eget. Vivamus sed vehicula ante, sed semper justo. Nam vitae lorem sagittis, pulvinar felis maximus, molestie orci. Fusce fermentum sapien non ullamcorper luctus. Donec nec auctor metus.</p>
            </div>

            <div className="container-participants">

                <div className="container-project-owner">
                    <div className="container-crown-project-owner">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Coroa_Real_Fechada_-_barrete_purp%C3%BAreo.svg/1200px-Coroa_Real_Fechada_-_barrete_purp%C3%BAreo.svg.png" alt="" />
                    </div>

                    <div className="project-owner">
                        <img src="https://img.ibxk.com.br/2012/4/materias/3802463332510208.jpg?ims=704x" alt="" />
                    </div>
                </div>

                <div className="container-project-participants">
                    <img src="https://img.ibxk.com.br/2012/4/materias/3802463332510208.jpg?ims=704x" alt="" />
                </div>

                <div className="container-project-participants">
                    <img src="https://img.ibxk.com.br/2012/4/materias/3802463332510208.jpg?ims=704x" alt="" />
                </div>

                <div className="container-project-participants">
                    <img src="https://img.ibxk.com.br/2012/4/materias/3802463332510208.jpg?ims=704x" alt="" />
                </div>

                <div className="container-project-participants">
                    <img src="https://img.ibxk.com.br/2012/4/materias/3802463332510208.jpg?ims=704x" alt="" />
                </div>

            </div>


            <div className="container-interactions">
                <div className="container-github">
                    <img src="../../public/assets/icons/google.svg" alt="" />
                    <span>github</span>
                </div>
                <div className="container-interaction-project">
                    <Button onClick={() => {}}>
                        <Icon name="favorite"/>
                    </Button>
                    <span>100</span>
                </div>
            </div>
        </div>
    )
}

export default Project