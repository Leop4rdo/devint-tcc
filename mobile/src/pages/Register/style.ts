import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import globalStyles from "../../styles/global";
import fonts from "../../styles/typography";

export default StyleSheet.create({
    container : {
        backgroundColor : colors.BLACK,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo : {
        fontSize: 32,
        color: colors.WHITE,
        marginBottom: 40
    },
    signUp: {
        ...globalStyles.text,
        fontFamily: fonts.POPPINS_BOLD,
        color: colors.LIGHT_PURPLE,
        fontSize: 32,
        marginBottom: 40
    },
    textInput: {
        fontFamily: fonts.POPPINS_LIGHT,
        color: colors.WHITE
    },
    input: {
        width: 256,
        marginBottom:40,
    }

})