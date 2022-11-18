import { MaterialIcons } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { Alert, FlatList, Image, Pressable, RefreshControl, Text, View } from "react-native"
import ICareerProps from "../../../interfaces/ICareerFocus"
import { IDev } from "../../../interfaces/IDev"
import colors from "../../../styles/colors"
import ProfileDetailItem from "../../ProfileDetailItem"
import DetailCard from "./card"
import InfoItem from "./InfoItem"
import * as devService from '../../../services/dev.service'

import styles from "./style"
import ISeniorityProps from "../../../interfaces/ISeniority"
import { applyDateMask } from "../../../utils/masks"
import { Picker } from "@react-native-picker/picker"
import PickerComponent from "../../shared/Picker"
import ISkillProps from "../../../interfaces/ISkill"
import SkillToken from "./SkillToken"


interface IDetailSectionProps {
    data : IDev
    canEdit : boolean
    onFinishEditing : (data : IDev) => void
}

const genderOptions = [
    { label : 'Masculino', value : 'm'},
    { label : 'Feminino', value : 'f'},
    { label : 'Outro', value : 'o'},
]

const DetailsSection : React.FC<IDetailSectionProps> = (props) => {
    if (!props.data) return(<span>loading...</span>)

    const [careerFocusOptions, setCareerFocusOptions] = useState<{ label : string, value : string}[]>([])
    const [seniorityOptions, setSeniorityOptions] = useState<{ label : string, value : string}[]>([])
    const [allSkills, setAllSkills] = useState<ISkillProps[]>([])
    const [data, setData] = useState({
       ...props.data
    })

    const [editing, setEditing] = useState({
        about : false,
        careerFocus : false,
        seniority : false,
        currentJob : false,
        skills : false
    })

    const getGenderName = (gender : string) => {
        if (gender == 'f')
            return 'Feminino'
        else if (gender == 'm')
            return 'Masculino'
        else
            return 'Outro'
    }

    const toggleEditing = (key : keyof typeof editing) => {
        if (editing[key])
            props.onFinishEditing(data)

        setEditing({
            ...editing,
            [key] : !editing[key]
        })
    }

    const handleChange = (value : string, key : keyof typeof data) => {
        setData({
            ...data,
            [key] : value
        })
    }

    const handleSelectChange = (value : string, key : keyof typeof data, options : any[]) => {
        const selected = options.find((o) => o.value == value)

        setData({
            ...data,
            [key] : selected
        })
    }

    const getCareerFocusOptions = async () => {
        const res = await devService.listCareerFocus()

        setCareerFocusOptions(
            res.data.map((c : ICareerProps) => {
                return {
                    value : c.id,
                    label : c.name
                }
            })
        )
    }

    const getSeniorityOptions = async () => {
        const res = await devService.listSeniorities()

        setSeniorityOptions(
            res.data.map((c : ISeniorityProps) => {
                return {
                    value : c.id,
                    label : c.name
                }
            })
        )
    }

    const getAllSkills = async () => {
        const res = await devService.listSkills()

        setAllSkills(res.data)
    }

    const addSkill = (id : string) => {
        const newSkill = allSkills.find((s) => s.id == id)

        if (!newSkill)
            Alert.alert("Erro ao adicionar skill!")

        setData({
            ...data,
            skills : [
                ...data.skills,
                newSkill!
            ]
        })
    }

    const removeSkill = (id : string) => {
        setData({
            ...data,
            skills : data.skills.filter((s) => s.id != id)
        })
    }

    useEffect(() => { getCareerFocusOptions(); getSeniorityOptions(); getAllSkills() }, [])

    return (
        <>
            {/* CONTATO */}
            <DetailCard title="Contato" headerIcon="forum" canEdit={props.canEdit}>
                <InfoItem icon='mail' value={data.email} />
            </DetailCard>

            {/* SOBRE */}
            <DetailCard title="Sobre" headerIcon="info" onEditPress={() => toggleEditing('about')} canEdit={props.canEdit} editing={editing.about}>
                <InfoItem 
                    icon='calendar-today' 
                    value={data.birthday} 
                    onChangeText={(text) => handleChange(applyDateMask(text), 'birthday')} 
                    editing={editing.about}
                    keyboardType="numeric"
                    />
                <InfoItem 
                    icon='person' 
                    value={(editing.about) ? data.gender : getGenderName(data.gender)}
                    options={genderOptions}
                    onChangeText={(text) => handleChange(text, 'gender')} 
                    editing={editing.about}
                    />
                <InfoItem 
                    imageUri={require('../../../../assets/github-icon-gray.png')} 
                    value={data.githubUsername} 
                    editing={editing.about}
                    onChangeText={(text) => handleChange(text, 'githubUsername')} 
                    />
            </DetailCard>

            {/* FOCO DE CARREIRA */}
            <DetailCard title="Foco de carreira" headerIcon="center-focus-strong" onEditPress={() => toggleEditing('careerFocus')} editing={editing.careerFocus} canEdit={props.canEdit}>
                <InfoItem 
                    value={(editing.careerFocus) ? data.careerFocus?.id || '' : data.careerFocus?.name || 'Não informado'} 
                    editing={editing.careerFocus}
                    options={careerFocusOptions}
                    onChangeText={(value) => handleSelectChange(value, 'careerFocus', careerFocusOptions)}
                />
            </DetailCard>

            {/* TRABALHO ATUAL */}
            <DetailCard title="Emprego Atual" headerIcon="work" onEditPress={() => toggleEditing('currentJob')} editing={editing.currentJob} canEdit={props.canEdit}>
                <InfoItem 
                    value={(editing.currentJob) ? data.currentJob : data.currentJob || 'Não informado'} 
                    onChangeText={(value) => handleChange(value, 'currentJob')} 
                    editing={editing.currentJob} 
                />
            </DetailCard>

            {/* SENIORIDADE */}
            <DetailCard title="Senioridade" headerIcon="school" onEditPress={() => toggleEditing('seniority')} editing={editing.seniority} canEdit={props.canEdit}>
                <InfoItem 
                    value={(editing.seniority) ? data.autoDeclaredSeniority?.id || '' : data.autoDeclaredSeniority?.name || 'Não informado'}
                    editing={editing.seniority}
                    options={seniorityOptions}
                    onChangeText={(value) => handleSelectChange(value, 'autoDeclaredSeniority', seniorityOptions)}
                />
            </DetailCard>

            {/* HABILIDADES */}
            <DetailCard title="Habilidades" headerIcon="star" onEditPress={() => toggleEditing('skills')} editing={editing.skills} canEdit={props.canEdit}>
                {
                    editing.skills &&
                    <PickerComponent onChange={(id) => addSkill(id)}>
                        <Picker.Item label="Selecionar uma skill" enabled={false} />
                        {
                            allSkills
                                .filter((skill) => !data.skills.find((s) => s.id == skill.id))
                                .map((skill) => 
                                    <Picker.Item label={skill.name} value={skill.id} key={skill.id} />
                            )
                        }
                    </PickerComponent>
                }

                <FlatList
                    renderItem={({item}) => 
                        <SkillToken 
                            data={item} 
                            editing={editing.skills} 
                            onRemove={removeSkill} 
                        />
                    }
                    data={data.skills}
                    keyExtractor={(item) => item.id!}
                    horizontal
                    snapToAlignment="start"
                    scrollEventThrottle={16}
                    decelerationRate="fast"
                    pagingEnabled

                />
            </DetailCard>

        </>
    )
}

export default DetailsSection;
