import React, { useState } from "react";

//import Button from "components/utils/Button";
import Input from "components/shared/Input";
import { isEmpty, isValidDate, isValidEmail } from "utils/validations";
import { dateMask } from "utils/masks";
//import Icon from "components/utils/Icon";

interface IForm1Props {
    onChange?: any;
    onSubmit: () => void,
    formData: any,
}

const DevForm1: React.FC<IForm1Props> = ({ onSubmit, formData, onChange }) => {

    const [currentGender, setCurrentGender] = useState("");

    const genderSelection = (gender: string) => {
        setCurrentGender(gender)
    }

    return (

        <form className="form" onSubmit={onSubmit}>

            <Input icon="account_circle" type="text" placeholder="Nome" name="name" onChange={onChange} validate={() => !isEmpty(formData.name)} />

            <Input icon="mail" type="text" placeholder="E-mail" onChange={onChange} name="email" value={formData.email} validate={() => isValidEmail(formData.email)} />

            <Input icon="today" type="text" placeholder="Data de nascimento" onChange={onChange} maxLength={10} value={dateMask(formData.birthday)} name="birthday" validate={() => isValidDate(formData.birthday)} />

            <select className="gender" defaultValue="Selecione" onChange={(e) => genderSelection(e.target.value)} value={currentGender}>
                <option value="f">Feminino</option>
                <option value="m">Masculino</option>
                <option value="o">Outro</option>
            </select>

        </form>
    )
}

export default DevForm1