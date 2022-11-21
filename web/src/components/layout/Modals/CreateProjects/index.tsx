import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import Input from "components/shared/Input";
import AutoTextArea from "components/shared/TextArea";
import React from "react";

interface ICreateProjects{
    openCloseModal: any
}

const CreateProjects: React.FC<ICreateProjects> = ({openCloseModal}) => {

    return (
        <div className="modal-container-global">
            <div className="container-elements">
                <div className="elements">
                    <div className="title-project">
                        <h1>Novo Projeto</h1>
                        <Icon name="close" onClick={openCloseModal} />
                    </div>

                    <div className="container-image">
                    <img src="https://www.vounajanela.com/wp-content/uploads/2015/03/fotos.jpg" alt="" />
                    </div>

                    <div className="container-data-filling">

                        <Input placeholder="Nome" />
                        <div className="data-github">
                            <Input placeholder="Github" />
                            <span>Open Source</span>

                            <div className="toggle-button">
                                <input type="checkbox" id="chk" />
                                <label htmlFor="chk" className="switch">
                                    <span className="slider"></span>
                                </label>
                            </div>

                        </div>

                        <AutoTextArea placeholder="Descrição" />
                        <div className="container-participants-github">
                            <Input placeholder="Github" />
                            <Button className="btn-primary" children={<Icon name="add" />} />
                        </div>

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
                </div>
            </div>
        </div>
    )
}

export default CreateProjects