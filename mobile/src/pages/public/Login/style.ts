import { StyleSheet } from "react-native"

import colors from "../../../styles/colors"
import globalStyles from "../../../styles/global"
import fonts from "../../../styles/typography"

const styles = StyleSheet.create({
    page : {
        height : '100%',
        width : '100%',
       

        backgroundColor : colors.DARK_GRAY,

        
       
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
    },

    ContainerLogin:{
        paddingVertical: 56,
        paddingHorizontal: 24,
    }
})

export default styles