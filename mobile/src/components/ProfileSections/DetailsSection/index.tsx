import { MaterialIcons } from "@expo/vector-icons"
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

const DetailsSection : React.FC<IDetailSectionProps> = (props) => {
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

    return (
        <>
            {/* CONTATO */}
            <DetailCard title="Contato" headerIcon="forum">
                <InfoItem icon='mail' value={props.data.email} />
            </DetailCard>

            {/* SOBRE */}
            <DetailCard title="Sobre" headerIcon="info">
                <InfoItem icon='calendar-today' value={getFormatedDate(props.data.birthday)} />
                <InfoItem icon='person' value={getGenderName(props.data.gender)} />
                <InfoItem imageUri={require('../../../../assets/github-icon-gray.png')} value={props.data.githubUsername} />
            </DetailCard>

            {/* FOCO DE CARREIRA */}
            <DetailCard title="Foco de carreira" headerIcon="center-focus-strong">
                <InfoItem value={props.data.careerFocus.name || 'Dev'} />
            </DetailCard>

            {/* TRABALHO ATUAL */}
            <DetailCard title="Trabalho Atual" headerIcon="work">
                <InfoItem value="john.doe@mail.com" />
            </DetailCard>

            {/* SENIORIDADE */}
            <DetailCard title="Senioridade" headerIcon="school">
                <InfoItem value="john.doe@mail.com" />
            </DetailCard>

            {/* HABILIDADES */}
            <DetailCard title="Habilidades" headerIcon="star">
                <InfoItem value="john.doe@mail.com" />
            </DetailCard>

        </>
    )
}

export default DetailsSection;
