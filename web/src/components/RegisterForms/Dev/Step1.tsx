import React, { useState } from "react";

//import Button from "components/utils/Button";
import Input from "components/shared/Input";
import { isEmpty, isValidDate, isValidEmail } from "utils/validations";
import { dateMask } from "utils/masks";
import Select from "components/shared/Select";

interface IForm1Props {
    onChange: any;
    onSubmit: () => void,
    formData: any,
}

const DevForm1: React.FC<IForm1Props> = ({ onSubmit, formData, onChange }) => {
    return (

        <form className="form" onSubmit={onSubmit}>

            <Input icon="account_circle" type="text" placeholder="Nome" name="name" onChange={onChange} value={formData.name} validate={() => !isEmpty(formData.name)} />

            <Input icon="mail" type="text" placeholder="E-mail" onChange={onChange} name="email" value={formData.email} validate={() => isValidEmail(formData.email)} />

            <Input icon="today" type="text" placeholder="Data de nascimento" onChange={onChange} maxLength={10} value={dateMask(formData.birthday)} name="birthday" validate={() => isValidDate(formData.birthday)} />

            <Select name="gender" onChange={onChange} value={formData.gender} icon="transgender">
                <option selected value="default">Selecione um gênero</option>

                <option value="f">Feminino</option>

                <option value="m">Masculino</option>

                <option value="o">Outro</option>
            </Select>


        </form>
    )
}

export default DevForm1