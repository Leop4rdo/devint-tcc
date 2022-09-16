import React, { useState } from "react";

//import Button from "components/utils/Button";
import Input from "components/utils/Input";
import { isEmpty, isValidDate } from "utils/validations";
import { maskDate } from "utils/masks";
//import Icon from "components/utils/Icon";

interface IForm1Props {
    onChange? : any;
    onSubmit: () => void,
    formData: any,
}

const DevForm1: React.FC<IForm1Props> = ({ onSubmit, formData, onChange}) => {



    const [date, setDate] = useState("");
    
    console.log(!isEmpty(formData.name))
    return (

        <form className="form" onSubmit={onSubmit}>

            <Input icon="account_circle" type="text" placeholder="Nome" name="name" onChange={onChange} validate={() => !isEmpty(formData.name)}/>

            <Input icon="mail" type="text" placeholder="E-mail" onChange={onChange} name="email" validate={() => !isEmpty(formData.email)}/>

            <Input icon="today" type="text" placeholder="Data de nascimento" onChange={(e : any) => setDate(maskDate(e.target.value))} name="birthday" validate={() => isValidDate(formData.birthday)}/>

        </form>
    )
}

export default DevForm1