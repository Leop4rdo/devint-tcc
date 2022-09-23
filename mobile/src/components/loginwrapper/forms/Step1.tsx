import { View , Text } from "react-native"
import FeedbackTextInput from '../../../components/shared/FeedbackInput';
import ButtonComponent from '../../../components/shared/Button';
import { useState , useContext} from 'react';
import { isEmail, isEmpty } from '../../../utils/validation';
import { AuthContext } from '../../../store/context/Auth.context';

 interface ILoginFormProps {
    styles : any,
    onClickStep?: any
}

const LoginFormStep1 :  React.FC<ILoginFormProps> = ({styles, onClickStep }) => {
    
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

    const onSubmit = () => {
        if(!isEmail(formValues.email)){
            return setWarning("Confira se os campos foram preenchidos corretamente!")
        }
        else{
            onClickStep()
        } 
            

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
               <Text style={styles.warning}>{warning}</Text>
                <ButtonComponent text='Proximo' onPress={onSubmit} />
           </View>
        </View>
    )
}

export default LoginFormStep1