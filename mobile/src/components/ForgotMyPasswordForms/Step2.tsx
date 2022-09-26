import { View , Text } from "react-native"
import globalStyles from "../../styles/global"
interface ILoginFormProps{
    styles?: any,
    onClickStep: any
}

const LoginFormStep2 :  React.FC<ILoginFormProps> = ({styles , onClickStep}) => {

    return(
        <View style={styles.Step2ContainerNoReceivedEmail}>
           <Text style={[styles.Step2TextNoReceivedEmail , globalStyles.linkRed]} onPress={onClickStep}>Não recebi o link</Text>
        </View>
    )
}

export default LoginFormStep2