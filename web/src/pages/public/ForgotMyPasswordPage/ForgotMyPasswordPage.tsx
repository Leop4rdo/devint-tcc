import LoginWrapper from "components/LoginWrapper"
import React from "react"
import { useState } from "react";
import Step1 from "../../../components/RegisterForms/ForgetMyPasswordPage/Step1"
import Step2 from "../../../components/RegisterForms/ForgetMyPasswordPage/Step2"
import Step3 from "../../../components/RegisterForms/ForgetMyPasswordPage/Step3"




const ForgotMyPasswordPage: React.FC = () => {

    const [currentStep ,  setCurrentStep] = useState(0)

    const onConfirmButtonPress = () => {

        if (currentStep >= steps.length - 1)
            return
        else
            setCurrentStep(currentStep + 1)
    }

    const steps=[
        {component: <Step1 OnClickButton={onConfirmButtonPress}/>},
        {component: <Step2  />},
        {component: <Step3 />},
    ]

    

    return(
       <LoginWrapper>
            {steps[currentStep].component}
       </LoginWrapper> 
    )

}   

export default ForgotMyPasswordPage