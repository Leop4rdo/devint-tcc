import { StyleSheet } from "react-native"
import globalStyles from "../../../styles/global"
import fonts from "../../../styles/typography"

import colors from "../../../styles/colors"

const styles = StyleSheet.create({
    container : {
        height : 48,
        paddingHorizontal : 12,
        marginVertical : 8,
        marginHorizontal : 8,

        backgroundColor : colors.BLACK,

        borderWidth : 2,
        borderColor : colors.GRAY,
        borderRadius : 12,

        flexDirection : "row",
        alignItems: 'center'
    },
    picker : {
        flex: 1,
        paddingHorizontal : 4,

        ...globalStyles.text,
        textVerticalAlign: 'center',
        alignItems: 'center'
    }
}) 

export default styles