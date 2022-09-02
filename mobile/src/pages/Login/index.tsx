import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ButtonComponent from '../../components/utils/Button';
import FeedbackTextInput from '../../components/utils/FeedbackInput';
import globalStyles from '../../styles/global';
import { isEmail, isEmpty } from '../../utils/validation';
import styles from './style'

interface IPageProps {
    navigation : any
}

const LoginPage : React.FC<any> = ({navigation}) => {
    console.log(navigation)

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

                <FeedbackTextInput 
                    style={{marginBottom : 40}}
                    icon="mail" 
                    onChangeText={(text) => handleInputChange(text, 'email')} 
                    validate={() => isEmail(formValues.email)}  
                    placeholder="E-mail" 
                />

                <FeedbackTextInput  
                    isPassword
                    icon="lock-open" 
                    onChangeText={(text) => handleInputChange(text, 'password')}  
                    validate={() => !isEmpty(formValues.password)}  
                    placeholder="Senha" />
            </View>

            <View style={globalStyles.centerItemContainer}>
                <ButtonComponent text='login' onPress={()=>{navigation.navigate('home')}} />
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={()=>{ alert('WIP'); }}
                    >
                    <Text style={[globalStyles.linkRed, styles.linkPasswordRecover ]}>Esqueci minha senha!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}   

export default LoginPage
