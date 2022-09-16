//import Button from "components/utils/Button";
import React, { useState } from "react";
import Input from "components/utils/Input";
import Button from "components/utils/Button";
import Icon from "components/utils/Icon";
//import Icon from "components/utils/Icon";

interface IFormProps {
    onChange? : any;
    onSubmit: (data : IFormFields) => void,
    formData: any;
}

interface IFormFields {
    password : string,
    passwordConfirm: string,
}

const DevForm2: React.FC<IFormProps> = ({ onSubmit, formData }) => {
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

            <Input type="text" placeholder="Usuário do GitHub (opcional)" onChange={() => {}} />

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

export default DevForm2