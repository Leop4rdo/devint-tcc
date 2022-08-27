import { StyleSheet } from "react-native"
import globalStyles from "../../styles/global"
import fonts from "../../styles/typography"

import colors from "../../styles/colors"

const styles = StyleSheet.create({
    container : {
        height : 48,
        paddingHorizontal : 12,
        backgroundColor : colors.BLACK,

        borderWidth : 2,
        borderColor : colors.GRAY,
        borderRadius : 12,

        flexDirection : "row",
        alignItems: 'center'
    },

    focusedContainer : {
        borderColor: colors.PRIMARY
    },

    invalidContainer : {
        borderColor : colors.RED
    },

    focusedInput : {
        color : colors.PRIMARY
    },

    invalidInput : {
        color : colors.RED
    },

    input : {
        height : '100%',
        width : '100%',

        ...globalStyles.text,
        textVerticalAlign: 'center',
        alignItems: 'center'
    }
})

export default styles
