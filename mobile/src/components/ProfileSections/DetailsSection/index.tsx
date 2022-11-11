import { MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { Image, Pressable, Text, View } from "react-native"
import { IDev } from "../../../interfaces/IDev"
import colors from "../../../styles/colors"
import ProfileDetailItem from "../../ProfileDetailItem"
import DetailCard from "./card"
import InfoItem from "./InfoItem"
import styles from "./style"

// import GITHUB_ICON from '../../../../assets/github-icon-gray.png';

interface IDetailSectionProps {
    data : IDev
    onFinishEditing ?: () => void
}

const genderOptions = [
    { label : 'Masculino', value : 'm'},
    { label : 'Feminino', value : 'f'},
    { label : 'Outro', value : 'o'},
]

const DetailsSection : React.FC<IDetailSectionProps> = (props) => {
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
        // if (editing[key])
            // update()

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
                    value={getFormatedDate(data.birthday)} 
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
                    value={data.careerFocus?.name || 'Não informado'} 
                    editing={editing.careerFocus}
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
