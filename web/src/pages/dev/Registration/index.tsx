import React from "react";
import { useState } from "react";
import DevForm1 from "components/RegisterForms/Dev/Step1";
import DevForm2 from "components/RegisterForms/Dev/Step2";
import Button from "components/utils/Button";
import Icon from "components/utils/Icon";
import { Link } from "react-router-dom";

const DevRegistrationPage: React.FC = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { desc: "", component: <DevForm1 onSubmit={() => { }} /> },
        { desc: "", component: <DevForm2 onSubmit={() => { }} /> },
    ]

    const onConfirmButtonPress = () => {

        if (currentStep >= steps.length - 1)
            return
        else
            setCurrentStep(currentStep + 1)
    }

    const onPreviousButtonPress = () => {

        if (currentStep >= 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    return (
        <div className="dev-registration-page">

            <div className="registration-form-container">
                <div className="dev-user">
                <Button children={(currentStep >= steps.length - 1) ? <Icon name="arrow_back" /> : [<Link to={'/register'}><Icon name="arrow_back" /></Link>]} onClick={onPreviousButtonPress} ></Button>
                <h2>Sou Dev</h2>
                </div>
                

                {steps[currentStep].component}

                <div className="button-container">

                    <Button type="submit" children={(currentStep >= steps.length - 1) ? 'Cadastrar' : ["Proximo", <Icon name="arrow_forward" />]} onClick={onConfirmButtonPress} className="btn-primary" ></Button>

                </div>

            </div>

            <div className="image-container">
                <img src="../assets/images/svg/dev-img.svg" alt="developer on a computer" />
            </div>

        </div>
    )
};

export default DevRegistrationPage;