import React from "react";

import { useState } from "react";

import EnterpriseForm1 from "components/RegisterForms/Enterprise/Step1";
import EnterpriseForm2 from "components/RegisterForms/Enterprise/Step2";
import Button from "components/utils/Button";
import Icon from "components/utils/Icon";

const EnterpriseRegistrationPage: React.FC = () => {

    const [step, setStep] = useState(1);

    let currentStep = () => {
        if (step === 1) {
            return <EnterpriseForm1 onSubmit={() => { }} />
        }

        if (step === 2) {
            return <EnterpriseForm2 onSubmit={() => { }} />
        }
    }

    return (
        <div className="enterprise-registration-page">

            <div className="registration-form-container">

                <h2>Sou Empresa</h2>
                {currentStep()}

                <div className="button-container">

                    <Button type="button" children={<Icon name="arrow_back" />} onClick={(e) => setStep(1)} className={"btn-previous step-" + step} />

                    <Button type="submit" children={step == 1 ? ["proximo", <Icon name="arrow_forward" />] : "cadastrar"} onClick={(e) => setStep(2)} ></Button>

                </div>

            </div>

            <div className="image-container">

                <img src="assets/images/company-img.svg" alt="developer on a computer" />

            </div>

        </div>
    )
};

export default EnterpriseRegistrationPage;