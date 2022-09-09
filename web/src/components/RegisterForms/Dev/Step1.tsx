import React, { useState } from "react";

import Button from "components/utils/Button";
import Input from "components/utils/Input";
import Icon from "components/utils/Icon";

interface IForm1Props {
    onSubmit: (data : IFormFields) => void,
}

interface IFormFields {
    name : string,
    email: string,
    birthday : string,
}

const DevForm1: React.FC<IForm1Props> = ({ onSubmit }) => {
    const [formFields, setFormFields] = useState<IFormFields>({
        name : "",
        email: "",
        birthday: "",
    })


    return (

        <form className="form" onSubmit={() => onSubmit(formFields)}>

            <Input icon="account_circle" type="text" placeholder="Nome" onChange={()=>{}} />

            <Input icon="mail" type="text" placeholder="E-mail"onChange={()=>{}} />

            <Input icon="today" type="text" placeholder="Data de nascimento" onChange={()=>{}}/>

        </form>
    )
}

export default DevForm1