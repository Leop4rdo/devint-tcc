import React from "react";
import { useState } from "react";

import DevForm1 from "components/RegisterForms/Dev/Step1";
import DevForm2 from "components/RegisterForms/Dev/Step2";
import Button from "components/utils/Button";
import Icon from "components/utils/Icon";

const DevRegistrationPage: React.FC = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {desc : "", component : <DevForm1 onSubmit={() => { }} />},
        {desc : "", component : <DevForm2 onSubmit={() => { }} />},
    ]

    const onConfirmButtonPress = () => {
        if (currentStep >= steps.length -1)
            return
        else 
            setCurrentStep(currentStep+1)    
    }

    // const [step, setStep] = useState(1);

    // let currentStep = () => {
    //     if (step === 1) {
    //         return <DevForm1 onSubmit={() => { }} />
    //     }

    //     if (step === 2) {
    //         return <DevForm2 onSubmit={() => { }} />
    //     }
    // }

    return (
        <div className="dev-registration-page">

            <div className="registration-form-container">
                <h2>Sou Dev</h2>

                {steps[currentStep].component}

                <div className="button-container">
                    <Button type="submit" children={(currentStep >= steps.length - 1) ? 'Cadastrar' : ["Proximo" , <Icon name="arrow_forward" />]} onClick={onConfirmButtonPress} className="button-register" ></Button>
                </div>
            </div>

            <div className="image-container">
                <img src="../assets/images/Svg/dev-img.svg" alt="developer on a computer" />
            </div>

        </div>
    )
};

export default DevRegistrationPage;