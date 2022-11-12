import { MaterialIcons } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { Image, Pressable, RefreshControl, Text, View } from "react-native"
import ICareerProps from "../../../interfaces/ICareerFocus"
import { IDev } from "../../../interfaces/IDev"
import colors from "../../../styles/colors"
import ProfileDetailItem from "../../ProfileDetailItem"
import DetailCard from "./card"
import InfoItem from "./InfoItem"
import * as devService from '../../../services/dev.service'

import styles from "./style"


interface IDetailSectionProps {
    data : IDev
    onFinishEditing : (data : IDev) => void
}

const genderOptions = [
    { label : 'Masculino', value : 'm'},
    { label : 'Feminino', value : 'f'},
    { label : 'Outro', value : 'o'},
]

const DetailsSection : React.FC<IDetailSectionProps> = (props) => {
    const [careerFocusOptions, setCareerFocusOptions] = useState<{ label : string, value : string}[]>([])
    const [data, setData] = useState({
       ...props.data
    })

    const [editing, setEditing] = useState({
        about : false,
        careerFocus : false,
        currentJob : false
    })

    const getFormatedDate = (dateString : string) => {   
        const splited = dateString.split('-')

        return `${splited[2]}/${splited[1]}/${splited[0]}`
    }

    const getGenderName = (gender : string) => {
        if (gender.toLowerCase() == 'f')
            return 'Feminino'
        else if (gender.toLowerCase() == 'm')
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

    const handleSelectChange = (value : string, key : keyof typeof data) => {
        setData({
            ...data,
            [key] : { id : value }
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

    useEffect(() => { getCareerFocusOptions() }, [])

    return (
        <>
            {/* CONTATO */}
            <DetailCard title="Contato" headerIcon="forum">
                <InfoItem icon='mail' value={data.email} />
            </DetailCard>

            {/* SOBRE */}
            <DetailCard title="Sobre" headerIcon="info" onEditPress={() => toggleEditing('about')} editing={editing.about}>
                <InfoItem 
                    icon='calendar-today' 
                    value={(editing.about) ? data.birthday : getFormatedDate(data.birthday)} 
                    onChangeText={(text) => handleChange(text, 'birthday')} 
                    editing={editing.about}
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
                    />
            </DetailCard>

            {/* FOCO DE CARREIRA */}
            <DetailCard title="Foco de carreira" headerIcon="center-focus-strong" onEditPress={() => toggleEditing('careerFocus')} editing={editing.careerFocus}>
                <InfoItem 
                    value={(editing.careerFocus) ? data.careerFocus.id || '' : data.careerFocus?.name || 'Não informado'} 
                    editing={editing.careerFocus}
                    options={careerFocusOptions}
                    onChangeText={(text) => handleSelectChange(text, 'careerFocus')}
                />
            </DetailCard>

            {/* TRABALHO ATUAL */}
            <DetailCard title="Emprego Atual" headerIcon="work" onEditPress={() => toggleEditing('currentJob')} editing={editing.currentJob}>
                <InfoItem 
                    value={data.currentJob || 'Não informado'} 
                    onChangeText={(value) => handleChange(value, 'currentJob')} 
                    editing={editing.currentJob} 
                />
            </DetailCard>

            {/* SENIORIDADE */}
            <DetailCard title="Senioridade" headerIcon="school">
                <InfoItem value={data.autoDeclaredSeniority?.name || 'Não informado'} />
            </DetailCard>

            {/* HABILIDADES */}
            <DetailCard title="Habilidades" headerIcon="star">
            </DetailCard>

        </>
    )
}

export default DetailsSection;
