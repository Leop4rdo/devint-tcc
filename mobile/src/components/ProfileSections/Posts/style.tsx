import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";

export default StyleSheet.create({
    button : {
        width : '100%',
        height : 48,

        backgroundColor : colors.PRIMARY,

        justifyContent : 'center',
        alignItems : 'center',

        borderRadius : 16
    },

    buttonText : {
        color : '#FFF',
        fontFamily : fonts.POPPINS_MEDIUM,
        fontSize : 16
    }
})