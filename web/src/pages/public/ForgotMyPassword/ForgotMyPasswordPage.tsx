import LoginWrapper from "components/layout/LoginWrapper"
import ForgotMyPasswordStep1 from "components/RegisterForms/ForgetMyPasswordPage/Step1";
import ForgotMyPasswordStep2 from "components/RegisterForms/ForgetMyPasswordPage/Step2";
import React from "react"
import { useState } from "react";

const ForgotMyPasswordPage: React.FC = () => {
    const [currentStep ,  setCurrentStep] = useState(0)

    const onConfirmButtonPress = () => {
        if (currentStep < steps.length )
            setCurrentStep(currentStep + 1)
    }

    const steps=[
        {component: <ForgotMyPasswordStep1 next={onConfirmButtonPress}/> },
        {component: <ForgotMyPasswordStep2  />},
    ]

    return(
       <LoginWrapper>
            {steps[currentStep].component}
       </LoginWrapper> 
    )
}   

export default ForgotMyPasswordPage