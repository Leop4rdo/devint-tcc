import { View , Text } from "react-native"
import globalStyles from '../../../styles/global';
interface ILoginFormProps{
    styles?: any,
    onClick: any
}

const LoginFormStep2 :  React.FC<ILoginFormProps> = ({styles , onClick}) => {

    return(
        <View style={styles.Step2ContainerNoReceivedEmail}>
           <Text style={[styles.Step2TextNoReceivedEmail , globalStyles.linkRed]} onPress={onClick}>Não recebi o link</Text>
        </View>
    )
}

export default LoginFormStep2