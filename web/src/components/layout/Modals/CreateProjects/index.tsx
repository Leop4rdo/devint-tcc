import Input from "components/shared/Input";
import React from "react";


const CreateProjects: React.FC = () => {

    return (
        <div className="modal-container-global">
            <div className="container-elements">
                <div className="elements">
                    <h1>Novo Projeto</h1>
                    <div className="container-image">

                        <div className="image">

                        </div>
                    </div>

                    <div className="container-data-filling">

                        <Input />

                        <div className="data-github">
                            <Input />
                        </div>
                        

                    </div>
                </div>


            </div>


        </div>
    )
}

export default CreateProjects