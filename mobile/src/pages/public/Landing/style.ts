import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.DARK_GRAY,
        width: '100%',
        height: '100%',
        display: 'flex',

    },
   
    textWelcome: {
        fontSize: 40,
        color: colors.PRIMARY,
        textAlign: 'center',
        marginBottom: 75,
        fontFamily: fonts.POPPINS_SEMIBOLD
    },

    textMessageWelcome: {
        color: colors.WHITE,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 70,
        fontFamily: fonts.POPPINS_REGULAR
    },

    containerButtons: {
        display: 'flex',
        alignItems: 'center'
    },
})