import { View , Text, Alert } from "react-native"
import FeedbackTextInput from '../shared/FeedbackInput';
import ButtonComponent from '../shared/Button';
import { useState , useContext} from 'react';
import { isEmail, isEmpty } from '../../utils/validation';
import * as authService from "../../services/auth.service";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
 interface ILoginFormProps {
    styles : any,
    next: () => void
}

const LoginFormStep1 :  React.FC<ILoginFormProps> = ({styles, next }) => {
    
    const [warning, setWarning] = useState("")

    const [formValues, setFormValues] = useState({
        email : "",
    })

    const handleInputChange = (text : string, key : keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key] : text
        })
    }

    const onSubmit = async () => {
        if (!isEmail(formValues.email)) 
            return Toast.show({
                type : ALERT_TYPE.DANGER,
                title : 'Null Pointer Exception!',
                textBody : "O campo de email não pode estar vazio"
            })

        const res = await authService.requestPasswordRecovery(formValues.email)

        if (res.hasError)
            Toast.show({
                type : ALERT_TYPE.DANGER,
                title : 'Compiler Error!',
                textBody : "Houve um erro inesperado, por favor tente novamente mais tarde!"
            })
        else
            next()
    }


    return(
        <View>
           <View style={styles.Step1ContainerSendEmail}>
               <FeedbackTextInput
                 style={{marginBottom : 40,  width: '85%'} }
                 icon="mail" 
                 onChangeText={(text) => handleInputChange(text, 'email')} 
                 placeholder="E-mail" 
                 validate={() => isEmail(formValues.email)}
               />
                <ButtonComponent text='Proximo' onPress={onSubmit} />
           </View>
        </View>
    )
}

export default LoginFormStep1