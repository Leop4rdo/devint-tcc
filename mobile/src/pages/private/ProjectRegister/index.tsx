import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { Image, KeyboardAvoidingView, Pressable, Switch, Text, View } from "react-native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import { color } from "react-native-reanimated"
import DevSelector from "../../../components/ProfileSections/Projects/DevSelector"
import ButtonComponent from "../../../components/shared/Button"
import FeedbackTextInput from "../../../components/shared/FeedbackInput"
import colors from "../../../styles/colors"

import styles from './style'



const ProjectRegisterPage : React.FC<{ route : any, navigation : any }> = ({route, navigation}) => {
    const [formValues, setFormValues] = useState({
        name : '',
        bannerURI : '',
        githubRepository : '',
        desc : '',
        openSource : false,
        members : []
    })

    return (
        <KeyboardAvoidingView style={styles.page}>
            <View style={styles.header}>
                <View style={styles.headerLeftContainer}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" color="#FFF" size={32} />
                    </Pressable>
                    <Text style={styles.title}>Novo projeto</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.formWrapper}>
                <View style={styles.bannerContainer}>
                    {
                        formValues.bannerURI && 
                        <Image style={{ flex : 1 }} source={{ uri : formValues.bannerURI }} />
                    }
                    <Pressable style={styles.addBannerBtn}>
                        <MaterialIcons name="add-a-photo" size={16} color="#FFF" />
                    </Pressable>
                </View>

                <View style={styles.divisor}/>

                <FeedbackTextInput style={styles.input} placeholder="Nome" onChangeText={() => {}} />
                <FeedbackTextInput style={styles.input} placeholder="Repositório do github" onChangeText={() => {}} />
                <FeedbackTextInput 
                    style={{...styles.descInput, ...styles.input}}
                    inputStyle={{ justifyContent : "flex-start", alignItems : "flex-start"}}  
                    placeholder="Descrição" 
                    multiline 
                    maxLength={255} 
                    maxLines={6} 
                    onChangeText={() => {}} 
                />
            
                <View style={{ alignItems : "center", flexDirection : 'row', }}>
                    <Text style={styles.label}>Open Source :</Text>
                    <Switch
                        trackColor={{ false: colors.GRAY, true: colors.PRIMARY }}
                        thumbColor={formValues.openSource ? '#FFF' : colors.LIGHT_GRAY}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setFormValues({ ...formValues, openSource: !formValues.openSource})}
                        value={formValues.openSource}
                    />
                </View>

                <DevSelector />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ProjectRegisterPage