import { MaterialIcons } from "@expo/vector-icons"
import { useContext, useState } from "react"
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, Switch, Text, View } from "react-native"
import { color } from "react-native-reanimated"
import DevSelector from "../../../components/ProfileSections/Projects/DevSelector"
import ButtonComponent from "../../../components/shared/Button"
import FeedbackTextInput from "../../../components/shared/FeedbackInput"
import IDevMinimal from "../../../interfaces/IDev"
import { AuthContext } from "../../../store/context/Auth.context"
import colors from "../../../styles/colors"

import styles from './style'



const ProjectRegisterPage : React.FC<{ route : any, navigation : any }> = ({route, navigation}) => {
    const authContext = useContext(AuthContext)

    const [formValues, setFormValues] = useState({
        name : '',
        bannerURI : '',
        githubRepository : '',
        desc : '',
        openSource : false,
        members : [
            authContext?.userData
        ]
    })

    const handleTextChange = (value : string, key : keyof typeof formValues) => {
        setFormValues({
            ...formValues,
            [key] : value
        })
    }

    const addTeamMember = (member : IDevMinimal) => {
        if (member.id === authContext?.userData.id)
            return

        if (formValues.members.find(m => m.id === member.id))
            return

        setFormValues({
            ...formValues,
            members : [...formValues.members, member]
        })
    }

    const removeTeamMember = (member : IDevMinimal) => {
        if (member.id === authContext?.userData.id)
            return

        setFormValues({
            ...formValues,
            members : formValues.members.filter((m) => m.id != member.id)
        })
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
            style={styles.page}
            >
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

                <FeedbackTextInput style={styles.input} placeholder="Nome" onChangeText={(value) => handleTextChange(value, 'name')} />
                <FeedbackTextInput style={styles.input} placeholder="Repositório do github" onChangeText={(value) => handleTextChange(value, 'githubRepository')} />
                <FeedbackTextInput 
                    style={{...styles.descInput, ...styles.input}}
                    inputStyle={{ justifyContent : "flex-start", alignItems : "flex-start"}}  
                    placeholder="Descrição" 
                    multiline 
                    maxLength={255} 
                    maxLines={6} 
                    onChangeText={(value) => handleTextChange(value, 'desc')}  
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

                <DevSelector onSelect={addTeamMember}/>

                <View style={styles.divisor}/>

                {
                    formValues.members.map((dev : IDevMinimal) => 
                        <TeamMemberCard 
                            data={dev} 
                            onRemove={() => removeTeamMember(dev)}
                            canRemove={dev.id != authContext?.userData.id}
                        />
                    )
                }
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

interface TeamMemberCardProps {
    data : IDevMinimal
    onRemove : () => void
    canRemove ?: boolean
}

const TeamMemberCard : React.FC<TeamMemberCardProps> = ({ data, onRemove, canRemove }) => {
    return (
        <View style={styles.teamMemberCard}>
            <View style={{ flexDirection : 'row' }}>
                <Image style={styles.devPic} source={{ uri : data.profilePicUrl }} />

                <View>
                    <Text style={styles.devName}>{data.name}</Text>
                    <Text style={styles.devGithub}>{data.githubUsername}</Text>
                </View>
            </View>

            {   
                canRemove && 
                <Pressable onPress={onRemove}>
                    <MaterialIcons name="delete-forever" size={32} color={colors.LIGHT_RED} />
                </Pressable>
            }
            
        </View>
    )
}


export default ProjectRegisterPage