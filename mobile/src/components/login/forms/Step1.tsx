import { View , Text } from "react-native"
import FeedbackTextInput from '../../../components/shared/FeedbackInput';
import ButtonComponent from '../../../components/shared/Button';

export interface ILoginFormProps {
    styles : any,
}

const LoginFormStep1 :  React.FC<ILoginFormProps> = ({styles}) => {

    return(
        <View>
           <View style={styles.ContainerSendEmail}>
               <FeedbackTextInput
                 style={{marginBottom : 40,  width: '85%'} }
                 icon="mail" 
                 onChangeText={() => {}} 
                 placeholder="E-mail" 
               />
                <ButtonComponent text='Proximo' onPress={() => {}} />
           </View>
        </View>
    )
}

export default LoginFormStep1