import React from "react";
import { useState } from "react";

import Input from "components/shared/Input";

interface IForm1Props {
    onSubmit: (data : IFormFields) => void,
}

interface IFormFields {
    name : string,
    email: string,
    cnpj : string,
}

const CompanyForm1: React.FC<IForm1Props> = ({ onSubmit }) => {
    
    const [formFields, setFormFields] = useState<IFormFields>({
        name : "",
        email: "",
        cnpj: "",
    })


    return (

        <form className="form" onSubmit={() => onSubmit(formFields)}>

            <Input icon="account_circle" type="text" placeholder="Nome" onChange={()=>{}} />

            <Input icon="mail" type="text" placeholder="E-mail"onChange={()=>{}} />

            <Input icon="badge" type="text" placeholder="CNPJ" onChange={()=>{}}/>

        </form>
    )
}

export default CompanyForm1;