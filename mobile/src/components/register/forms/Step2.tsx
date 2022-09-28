import { useEffect } from "react"
import { View, Text, Animated } from "react-native"
import useAnimation from "../../../hooks/useAnimation"
import { applyDateMask } from "../../../utils/masks"
import FeedbackTextInput from "../../shared/FeedbackInput"
import PickerComponent from "../../shared/Picker"
import { Picker } from "@react-native-picker/picker"

import { IRegisterFormProps } from "./Step1"

const RegisterFormStep2: React.FC<IRegisterFormProps> = ({ styles, formData, onChange }) => {
    const opacityAnim = useAnimation(0, 1)

    useEffect(() => {
        opacityAnim.start();
    }, [opacityAnim.prop])

    return (
        <Animated.View style={{ ...styles.form, opacity: opacityAnim.prop }}>
            <FeedbackTextInput
                style={styles.input}
                maxLength={10}
                placeholder="dd/mm/aaaa"
                value={formData.birthday}
                icon="calendar-today"
                keyboardType="numeric"
                onChangeText={(text: string) => onChange(applyDateMask(text), 'birthday')} ></FeedbackTextInput>

            <PickerComponent icon="group" value={formData.gender} onChange={(value: string) => onChange(value, "gender")}>
                <Picker.Item label="Gênero" value=""  enabled={false}/>
                <Picker.Item label="Feminino" value="f" />
                <Picker.Item label="Masculino" value="m" />
                <Picker.Item label="Outro" value="o" />
            </PickerComponent>
        </Animated.View>
    )
}

export default RegisterFormStep2