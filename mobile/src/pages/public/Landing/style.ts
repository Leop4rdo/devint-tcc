import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.DARK_GRAY,
        flex : 1,
        display: 'flex',

    },
   
    textWelcome: {
        fontSize: 48,
        color: colors.PRIMARY,
        textAlign: 'center',
        marginBottom: 24,
        fontFamily: fonts.POPPINS_SEMIBOLD
    },

    textMessageWelcome: {
        color: colors.WHITE,
        fontSize: 24,
        textAlign: 'center',
        marginBottom: '50%',
        fontFamily: fonts.POPPINS_REGULAR
    },

    containerButtons: {
        display: 'flex',
        alignItems: 'center'
    },
})