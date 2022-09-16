import React, { useState } from "react";

//import Button from "components/utils/Button";
import Input from "components/utils/Input";
import { isEmpty, isValidDate, isValidEmail } from "utils/validations";
import { dateMask } from "utils/masks";
//import Icon from "components/utils/Icon";

interface IForm1Props {
    onChange? : any;
    onSubmit: () => void,
    formData: any,
}

const DevForm1: React.FC<IForm1Props> = ({ onSubmit, formData, onChange}) => {
    
    return (

        <form className="form" onSubmit={onSubmit}>

            <Input icon="account_circle" type="text" placeholder="Nome" name="name" onChange={onChange} validate={() => !isEmpty(formData.name)}/>

            <Input icon="mail" type="text" placeholder="E-mail" onChange={onChange} name="email" validate={() => isValidEmail(formData.email)}/>

            <Input icon="today" type="text" placeholder="Data de nascimento" onChange={onChange} maxLength={10} value={dateMask(formData.birthday)} name="birthday" validate={() => isValidDate(formData.birthday)}/>

        </form>
    )
}

export default DevForm1