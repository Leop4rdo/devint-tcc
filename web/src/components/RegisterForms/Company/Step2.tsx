import React from "react";
import { useState } from "react";

import Input from "components/shared/Input";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";

interface IFormProps {
    onSubmit: (data: IFormFields) => void,
}

interface IFormFields {
    password: string,
    passwordConfirm: string,
}

const CompanyForm2: React.FC<IFormProps> = ({ onSubmit }) => {
    const [formFields, setFormFields] = useState<IFormFields>({
        password: "",
        passwordConfirm: "",
    })

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    return (

        <form className="form" onSubmit={() => onSubmit(formFields)}>

            <div className="password-container">

                <Input icon="lock" placeholder="Senha" onChange={() => { }} type={passwordShown ? "text" : "password"} />

                <Button className="btn-toggle-password" onClick={togglePassword} children={<Icon name={passwordShown ? "visibility_off" : "visibility"} />}></Button>

            </div>

            <div className="password-container">

                <Input icon="lock" placeholder="Confirmar senha" onChange={() => { }} type={passwordShown ? "text" : "password"} />

                <Button className="btn-toggle-password" onClick={togglePassword} children={<Icon name={passwordShown ? "visibility_off" : "visibility"} />}></Button>

            </div>

            <div className="terms-checkbox">

                <input type="checkbox" id="terms-of-acceptance" />

                <label htmlFor="terms-of-acceptance" >Li e aceito os termos e condições</label>

            </div>

        </form>
    )
}

export default CompanyForm2;