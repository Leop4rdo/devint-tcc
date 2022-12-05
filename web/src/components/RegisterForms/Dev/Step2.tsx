//import Button from "components/utils/Button";
import React, { useState } from "react";
import Input from "components/shared/Input";
import { isEmpty } from "utils/validations";


interface IFormProps {
    onChange?: any;
    onSubmit: () => void,
    formData: any;
    teste?: any
}

const DevForm2: React.FC<IFormProps> = ({ onSubmit, formData, onChange , teste}) => {

    const [checked, setChecked] = useState('off');
    const [ ValidadeUserGithub , setValidadeUserGithub] = useState(true)
    const handleChecked = () => {
        if (checked == 'off') setChecked('on')
        if (checked == 'on') setChecked('off')
    }

    
    const apiGithub = async () => {
        if( formData.githubUser.length > 3) {
            fetch(`https://api.github.com/users/${formData.githubUser}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resposta) => resposta.json())
            .then((data) => {

                if(data.id)
                    setValidadeUserGithub(true)
                else if(data.message === 'Not Found' || data.message)
                    setValidadeUserGithub(false)
                

                console.log(data)
            })
            .catch((data) => {
                
            })
        }
        
    }

    
    

    return (

        <form className="form" onSubmit={onSubmit}>

            <Input type="text" onBlur={apiGithub} placeholder="Usuário do GitHub (opcional)" onChange={onChange} value={formData.githubUser} name="githubUser" image="/assets/icons/github.svg" validate={() => ValidadeUserGithub} />

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