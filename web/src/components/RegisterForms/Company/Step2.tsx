import React from "react";
import { useState } from "react";

import Input from "components/utils/Input";

interface IFormProps {
    onSubmit: (data : IFormFields) => void,
}

interface IFormFields {
    password : string,
    passwordConfirm: string,
}

const CompanyForm2: React.FC<IFormProps> = ({ onSubmit }) => {
    const [formFields, setFormFields] = useState<IFormFields>({
        password: "",
        passwordConfirm: "",
    })


    return (

        <form className="form" onSubmit={() => onSubmit(formFields)}>

            <Input icon="lock" type="text" placeholder="Senha" onChange={()=>{}} />

            <Input icon="lock" type="text" placeholder="Confirme a senha"onChange={()=>{}} />

            <div className="terms-checkbox">

                <input type="checkbox" id="terms-of-acceptance" />
                
                <label htmlFor="terms-of-acceptance" >Li e aceito os termos e condições</label>
            
            </div>

        </form>
    )
}

export default CompanyForm2;