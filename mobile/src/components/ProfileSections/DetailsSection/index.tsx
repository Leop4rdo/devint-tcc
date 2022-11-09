import { MaterialIcons } from "@expo/vector-icons"
import { Image, Pressable, Text, View } from "react-native"
import colors from "../../../styles/colors"
import ProfileDetailItem from "../../ProfileDetailItem"
import DetailCard from "./card"
import InfoItem from "./InfoItem"
import styles from "./style"

// import GITHUB_ICON from '../../../../assets/github-icon-gray.png';

const DetailsSection : React.FC = () => {
    return (
        <>
            {/* CONTATO */}
            <DetailCard title="Contato" headerIcon="forum">
                <InfoItem icon='mail' value="john.doe@mail.com" />
            </DetailCard>

            <DetailCard title="Sobre" headerIcon="info">
                <InfoItem icon='calendar-today' value="john.doe@mail.com" />
                <InfoItem icon='person' value="john.doe@mail.com" />
                <InfoItem icon='calendar-today' value="john.doe@mail.com" />
            </DetailCard>

            
            
            {/* SOBRE */}
            <View style={styles.dataContainer}>
                <View style={styles.header}>
                    <View style={styles.infoItem}>
                        <MaterialIcons name="info" size={24} color='#FFF' />
                        <Text style={styles.title}>Sobre</Text>
                    </View>

                    <Pressable>
                        <MaterialIcons name="edit" size={16} color={colors.LIGHT_GRAY} />
                    </Pressable>
                </View>

                <View>
                    <View style={styles.infoItem}>
                        <MaterialIcons name='calendar-today' size={16} color={colors.LIGHT_GRAY} />
                        <Text style={styles.infoItemText}>john.doe@mail.com</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <MaterialIcons name='person' size={16} color={colors.LIGHT_GRAY} />
                        <Text style={styles.infoItemText}>john.doe@mail.com</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Image source={require('../../../../assets/github-icon-gray.png')} style={{width : 16, height : 16}}/>
                        <Text style={styles.infoItemText}>john.doe@mail.com</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default DetailsSection;
