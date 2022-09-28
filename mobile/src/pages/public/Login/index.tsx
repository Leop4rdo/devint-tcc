
import { useContext, useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ButtonComponent from '../../../components/shared/Button';
import FeedbackTextInput from '../../../components/shared/FeedbackInput';
import Header from '../../../components/shared/Header/index';
import { AuthContext } from '../../../store/context/Auth.context';
import globalStyles from '../../../styles/global';
import { isEmail, isEmpty } from '../../../utils/validation';
import styles from './style'


const LoginPage : React.FC<any> = ({navigation}) => {
    const authContext = useContext(AuthContext)

    const [warning, setWarning] = useState("")


    const [formValues, setFormValues] = useState({
        email : "",
        password : "",
    })

    const handleInputChange = (text : string, key : keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key] : text
        })
    }

    const onSubmit = async () => {
        if(!isEmail(formValues.email) || isEmpty(formValues.password)) 
            return setWarning("Confira se os campos foram preenchidos corretamente!")

        const res = await authContext?.signIn(formValues.email, formValues.password)

        if (res.hasError) setWarning("Usuário ou senha invalidos!")
    }

    return (
        <View style={styles.page}>
           <Header showIcon={false} onPressIcon={() => navigation.navigate('landing')}/>
            <View style={styles.ContainerLogin}>
                <Text style={styles.title}>Entrar</Text>

                <FeedbackTextInput 
                    style={{marginBottom : 40}}
                    icon="mail" 
                    onChangeText={(text) => handleInputChange(text, 'email')} 
                    validate={() => isEmail(formValues.email)}  
                    placeholder="E-mail" 
                />

                <View style={{width: '100%', alignItems : 'flex-end'}}>
                    <FeedbackTextInput  
                        isPassword
                        icon="lock-open" 
                        onChangeText={(text) => handleInputChange(text, 'password')}  
                        validate={() => !isEmpty(formValues.password)}  
                        placeholder="Senha"/>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=>{navigation.navigate('loginwrapper')}}
                        >
                        <Text style={[globalStyles.linkRed, styles.linkPasswordRecover ]}>Esqueci minha senha!</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.warning}>{warning}</Text>
            </View>

            <View style={globalStyles.centerItemContainer}>
                <ButtonComponent text='login' onPress={() => onSubmit()} />
            </View>
        </View>
    )
}   

export default LoginPage
