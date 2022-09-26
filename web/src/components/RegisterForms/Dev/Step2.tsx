//import Button from "components/utils/Button";
import React, { useState } from "react";
import Input from "components/shared/Input";
import { isEmpty } from "utils/validations";

interface IFormProps {
    onChange?: any;
    onSubmit: () => void,
    formData: any;
}

const DevForm2: React.FC<IFormProps> = ({ onSubmit, formData, onChange }) => {

    const [checked, setChecked] = useState('off');

    const handleChecked = () => {
        if (checked == 'off') setChecked('on')
        if (checked == 'on') setChecked('off')
    }

    return (

        <form className="form" onSubmit={onSubmit}>

            <Input type="text" placeholder="Usuário do GitHub (opcional)" onChange={onChange} name="githubUser" />

                <Input icon="lock" placeholder="Senha" onChange={onChange} name="password" type="password" validate={() => !isEmpty(formData.password)}/>

                <Input icon="lock" placeholder="Confirmar senha" onChange={onChange} name="confirmPassword" type="password" validate={() => !isEmpty(formData.confirmPassword)} />

            <div className="terms-checkbox">

                <input type="checkbox" id="terms-of-acceptance" value={checked == 'on' ? 'off' : 'on'} name="termsOfAcceptance" onChange={onChange} onClick={handleChecked} />
                
                <label htmlFor="terms-of-acceptance" >Li e aceito os termos e condições</label>

            </div>

        </form>
    )
}

export default DevForm2