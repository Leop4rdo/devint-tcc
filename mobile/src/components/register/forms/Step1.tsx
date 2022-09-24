import { Picker } from "@react-native-picker/picker"
import {useEffect, useRef, useState} from "react"
import { View, Text, Animated, Easing } from "react-native"
import useAnimation from "../../../hooks/useAnimation"
import FeedbackTextInput from "../../shared/FeedbackInput"
import PickerComponent from "../../shared/Picker"


export interface IRegisterFormProps {
    styles : any,
    formData : any
    onChange : (value : string, key : any) => void
}

const RegisterFormStep1 : React.FC<IRegisterFormProps> = ({styles, formData, onChange}) => {

    const opacityAnim = useAnimation(0, 1)

    useEffect(() => {
        opacityAnim.start();
    }, [opacityAnim.prop])

    return (
        <Animated.View style={{...styles.form, opacity : opacityAnim.prop}}>
            <FeedbackTextInput style={styles.input} placeholder="Digite seu nome" icon="person" onChangeText={(text : string) => onChange(text, "name")} ></FeedbackTextInput>

            <FeedbackTextInput style={styles.input} placeholder="Digite um email" icon="mail" onChangeText={(text : string) => onChange(text, "email")} keyboardType="email-address"></FeedbackTextInput>

            <PickerComponent icon="circle" value={formData.gender} onChange={(value : string) => onChange(value, "gender")}>
                <Picker.Item label="Selecione um gênero" value="default"/>
                <Picker.Item label="Feminino" value="f"/>
                <Picker.Item label="Masculino" value="m" />
                <Picker.Item label="Outro" value="o" />
            </PickerComponent>
        </Animated.View>
    )
}


export default RegisterFormStep1

