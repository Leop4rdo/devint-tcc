import React from "react";

import { isEmpty, isValidEmail } from "utils/validations";
import { cnpjMask } from "utils/masks";
import Input from "components/shared/Input";

interface IForm1Props {
    onChange?: any;
    onSubmit: () => void,
    formData: any,
}

const CompanyForm1: React.FC<IForm1Props> = ({ onSubmit, formData, onChange }) => {
    
    return (

        <form className="form" onSubmit={onSubmit}>

            <Input icon="account_circle" type="text" placeholder="Nome" name="name" onChange={onChange} validate={() => !isEmpty(formData.name)}/>

            <Input icon="mail" type="text" placeholder="E-mail" name="email" onChange={onChange} value={formData.email} validate={() => isValidEmail(formData.email)} />

            <Input icon="badge" type="text" placeholder="CNPJ" name="cnpj" onChange={onChange} maxLength={18} value={cnpjMask(formData.cnpj)} validate={() => !isEmpty(formData.cnpj)} />

        </form>
    )
}

export default CompanyForm1;