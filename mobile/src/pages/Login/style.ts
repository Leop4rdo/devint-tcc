import { StyleSheet } from "react-native"

import colors from "../../styles/colors"
import globalStyles from "../../styles/global"
import fonts from "../../styles/typography"

const styles = StyleSheet.create({
    page : {
        height : '100%',
        width : '100%',
        paddingVertical: 56,
        paddingHorizontal: 24,

        backgroundColor : colors.DARK_GRAY,

        alignItems : 'center',
        justifyContent: "space-between"
    },

    title : {
        ...globalStyles.text,
        fontSize: 32,
        fontFamily: fonts.POPPINS_MEDIUM,

        textAlign: "center",

        marginBottom: 24
    },

    linkPasswordRecover : {
        margin: 16
    },

    warning : {
        ...globalStyles.text,
        textAlign: 'center',
        marginTop : 24,
        color : colors.RED
    }
})

export default styles