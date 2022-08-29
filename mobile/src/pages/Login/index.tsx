import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ButtonComponent from '../../components/utils/Button';
import FeedbackTextInput from '../../components/utils/FeedbackInput';
import globalStyles from '../../styles/global';
import styles from './style'

const LoginPage : React.FC = () => {
    const [formValues, setFormValues] = useState({
        email : "",
        password : ""
    })

    const handleInputChange = (text : string, key : keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key] : text
        })
    }

    return (
        <View style={styles.page}>
            <Text style={globalStyles.appTitle_medium}>AppName</Text>
            
            <View style={globalStyles.centerItemContainer}>
                <Text style={styles.title}>Entrar</Text>

                <FeedbackTextInput icon="mail" onChangeText={(text) => handleInputChange(text, 'email')}  placeholder="E-mail" />

                <FeedbackTextInput  icon="lock-open"  onChangeText={(text) => handleInputChange(text, 'password')}  placeholder="Senha" />
            </View>

            <View style={globalStyles.centerItemContainer}>
                <ButtonComponent text='login' onPress={()=>{}} />
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={()=>{}}
                    >
                    <Text style={[globalStyles.linkRed, styles.linkPasswordRecover ]}>Esqueci minha senha!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}   

export default LoginPage
