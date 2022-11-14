import { MaterialIcons } from "@expo/vector-icons"
import { Image, Pressable, Text, View } from "react-native"
import { SvgUri } from "react-native-svg"
import ISkillProps from "../../../interfaces/ISkill"
import colors from "../../../styles/colors"
import styles from "./style"

interface ISkillTokenProps {
    data : ISkillProps,
    editing ?: boolean,
    onRemove : (id : string) => void
}

const SkillToken : React.FC<ISkillTokenProps> = (props) => {
    const onPress = () => {
        if (!props.editing)
            return

        props.onRemove(props.data.id!)
    }

    return (
        <Pressable onPress={onPress} style={styles.skillToken}>
            <SvgUri uri={props.data.icon} width={32} height={32} />

            <View style={{flexDirection : 'row', alignItems: 'center'}}>
                { 
                    props.editing &&
                    <MaterialIcons name="delete" size={16} color={colors.RED} style={styles.removeSkillBtn}/>  
                }
                <Text style={styles.skillName}>{props.data.name}</Text>
            </View>
        </Pressable>
    )
}

export default SkillToken