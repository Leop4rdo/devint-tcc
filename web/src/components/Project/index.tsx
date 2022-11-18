import Icon from "components/shared/Icon";
import React from "react";



const Project: React.FC = () => {

    return (
        <div className="container-project">
            <div className="container-image">
                <img src="assets/images/teste.png" alt="" />
            </div>

            <div className="container-name-project">
                <div className="name-project">
                    <h2>Devint NetWork</h2>
                    <span>(open source)</span>
                </div>
                <Icon name="edit" />

            </div>

            <div className="container-description-project">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat lectus in nibh placerat condimentum. Morbi ipsum libero, faucibus ac facilisis vel, aliquet non nisi. Nunc ullamcorper et risus dignissim fringilla. Duis semper molestie arcu, quis ultricies mi interdum eget. Vivamus sed vehicula ante, sed semper justo. Nam vitae lorem sagittis, pulvinar felis maximus, molestie orci. Fusce fermentum sapien non ullamcorper luctus. Donec nec auctor metus.</p>
            </div>

            <div className="container-participants">
                <div className="container-project-owner">

                </div>

                <div className="container-project-owner">

                </div>

                <div className="container-project-owner">

                </div>

                <div className="container-project-owner">

                </div>

                <div className="container-project-owner">

                </div>

            </div>

            <div className="container-interactions">
                <div className="container-github">
                    <img src="./assets/icons/github.svg" alt="" />
                    <span>github</span>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Project