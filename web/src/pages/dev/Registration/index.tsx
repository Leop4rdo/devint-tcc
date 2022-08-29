import React from "react";

import Input from "components/utils/Input";
import Button from "components/utils/Button";
import Icon from "components/utils/Icon";

const DevRegistrationPage: React.FC = () => {

    return (
        <div className="dev-registration-page">

            <div className="registration-form-container">

                <div className="dev-registration-form">

                    <h2>Sou Dev</h2>

                    <Input icon="account_circle" type="text" placeholder="Nome" onChange={()=>{}} />

                    <Input icon="mail" type="text" placeholder="E-mail"onChange={()=>{}} />
                    
                    <Input icon="today" type="text" placeholder="Data de nascimento" onChange={()=>{}} />
                
                    <Button type="submit" onClick={() => {}} children={["proximo" , <Icon name="arrow_forward" />]}></Button>
                
                </div>

            </div>

            <div className="image-container">
                <img src="assets/images/dev-image.svg" />
            </div>

        </div>
    )
};

export default DevRegistrationPage;