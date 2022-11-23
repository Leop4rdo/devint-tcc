import { useEffect, useRef, useState } from "react"
import { View, Text, Animated, Easing } from "react-native"
import useAnimation from "../../../hooks/useAnimation"
import FeedbackTextInput from "../../shared/FeedbackInput"
import PickerComponent from "../../shared/Picker"
import { Picker } from '@react-native-picker/picker';


export interface IRegisterFormProps {
    styles: any,
    formData: any
    onChange: (value: string, key: any) => void
}

const RegisterFormStep1: React.FC<IRegisterFormProps> = ({ styles, formData, onChange }) => {
    const opacityAnim = useAnimation(0, 1)

    useEffect(() => {
        opacityAnim.start();
    }, [opacityAnim.prop])

    return (
        <Animated.View style={{ ...styles.form, opacity: opacityAnim.prop }}>
            <FeedbackTextInput value={formData.name} style={styles.input} placeholder="Digite seu nome" icon="person" onChangeText={(text: string) => onChange(text, "name")} ></FeedbackTextInput>

            <FeedbackTextInput value={formData.email} style={styles.input} placeholder="Digite um email" icon="mail" onChangeText={(text: string) => onChange(text, "email")} keyboardType="email-address"></FeedbackTextInput>

            <FeedbackTextInput value={formData.github} style={styles.input} placeholder="Usuário" onChangeText={(text: string) => onChange(text, "github")} keyboardType="user" image={require("../../../../assets/github-icon-gray.png")} focusImage={require("../../../../assets/github-icon-light-purple.png")}></FeedbackTextInput>
        </Animated.View>
    )
}


export default RegisterFormStep1

