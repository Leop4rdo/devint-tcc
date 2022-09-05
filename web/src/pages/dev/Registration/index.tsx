import React from "react";
import { useState } from "react";

import DevForm1 from "components/RegisterForms/Dev/Step1";
import DevForm2 from "components/RegisterForms/Dev/Step2";
import { Button } from "@mui/material";
import Icon from "components/utils/Icon";

const DevRegistrationPage: React.FC = () => {

    const [step, setStep] = useState(1);

    let currentStep = () => {
        if (step === 1) {
            return <DevForm1 onSubmit={() => { }} />
        }

        if (step === 2) {
            return <DevForm2 onSubmit={() => { }} />
        }
    }

    return (
        <div className="dev-registration-page">

            <div className="registration-form-container">

                <h2>Sou Dev</h2>
                {currentStep()}

                <div className="button-container">

                    <Button type="button" children={<Icon name="arrow_back" />} onClick={(e) => setStep(1)} style={{ display: step == 1 ? 'none' : 'block' }}/>

                    <Button type="submit" children={ step == 1 ? ["proximo", <Icon name="arrow_forward" />] : "cadastrar"} onClick={(e) => setStep(2)} ></Button>

                </div>

            </div>

            <div className="image-container">
                <img src="assets/images/dev-image.svg" alt="developer on a computer" />
            </div>

        </div>
    )
};

export default DevRegistrationPage;