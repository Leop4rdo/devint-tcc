import React from "react";

import DevForm1 from "components/RegisterForms/Dev/Step1";
import DevForm2 from "components/RegisterForms/Dev/Step2";

const DevRegistrationPage: React.FC = () => {

    return (
        <div className="dev-registration-page">

            <div className="registration-form-container">

                    <h2>Sou Dev</h2>

                    {/* <DevForm1 onSubmit={() => {}}/> */}

                    <DevForm2 onSubmit={() => {}} />

            </div>

            <div className="image-container">
                <img src="assets/images/dev-image.svg" alt="developer on a computer" />
            </div>

        </div>
    )
};

export default DevRegistrationPage;