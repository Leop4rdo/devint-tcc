import { StyleSheet } from "react-native";
import globalStyles from "../../styles/global";
import fonts from "../../styles/typography";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container : {
        justifyContent : "center",
        alignContent : "center",
    },

    hello : {
        fontSize : 48,
        fontFamily : fonts.POPPINS_BOLD,
        color : colors.PRIMARY,
        marginVertical : 12,
        textAlign : "center",
    },

    message : {
        ...globalStyles.text,
        color : colors.LIGHT_GRAY,
        textAlign : "center",
    }
})