import React from "react";

import { useState } from "react";

import CompanyForm1 from "components/RegisterForms/Company/Step1";
import CompanyForm2 from "components/RegisterForms/Company/Step2";
import Button from "components/utils/Button";
import Icon from "components/utils/Icon";

const CompanyRegistrationPage: React.FC = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { desc: "", component: <CompanyForm1 onSubmit={() => { }} /> },
        { desc: "", component: <CompanyForm2 onSubmit={() => { }} /> },
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
        <div className="company-registration-page">

            <div className="registration-form-container">

                <h2>Sou Empresa</h2>
                
                {steps[currentStep].component}

                <div className="button-container">

                <Button type="button" children={<Icon name="arrow_back"/>} className={"btn-previous btn-primary step-" + currentStep} onClick={onPreviousButtonPress} ></Button>

                <Button type="submit" children={(currentStep >= steps.length - 1) ? 'Cadastrar' : ["Proximo", <Icon name="arrow_forward" />]} onClick={onConfirmButtonPress} className="btn-primary" ></Button>

                </div>

            </div>

            <div className="image-container">
                
                <img src="../assets/images/Svg/company-img.svg" alt="developer on a computer" />

            </div>

        </div>
    )
};

export default CompanyRegistrationPage;