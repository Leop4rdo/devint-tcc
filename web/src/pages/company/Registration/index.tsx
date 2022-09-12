import React from "react";

import { useState } from "react";

import CompanyForm1 from "components/RegisterForms/Company/Step1";
import CompanyForm2 from "components/RegisterForms/Company/Step2";
import Button from "components/utils/Button";
import Icon from "components/utils/Icon";

const CompanyRegistrationPage: React.FC = () => {

    const [step, setStep] = useState(1);

    let currentStep = () => {
        if (step === 1) {
            return <CompanyForm1 onSubmit={() => { }} />
        }

        if (step === 2) {
            return <CompanyForm2 onSubmit={() => { }} />
        }
    }

    return (
        <div className="company-registration-page">

            <div className="registration-form-container">

                <h2>Sou Empresa</h2>
                {currentStep()}

                <div className="button-container">

                    <Button type="button" children={<Icon name="arrow_back" />} onClick={(e) => setStep(1)} className={"btn-previous step-" + step} />

                    <Button type="submit" children={step == 1 ? ["proximo", <Icon name="arrow_forward" />] : "cadastrar"} onClick={(e) => setStep(2)} ></Button>

                </div>

            </div>

            <div className="image-container">
                
                <img src="../assets/images/Svg/company-img.svg" alt="developer on a computer" />

            </div>

        </div>
    )
};

export default CompanyRegistrationPage;