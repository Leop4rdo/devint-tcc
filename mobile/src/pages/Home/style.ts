import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/typography";
import globalStyles from "../../styles/global";

const style = StyleSheet.create({
    container : {
        backgroundColor : colors.BLACK,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo : {
        color: colors.WHITE,
        fontSize: 32,
        marginBottom: 56
    },
    main : {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    welcome : {
        color: colors.PRIMARY,
        fontSize: 24,
        fontFamily: fonts.POPPINS_BOLD,
        marginBottom: 40,
    },
    message : {
        ...globalStyles.text,

        color: colors.WHITE,
        marginBottom: 56
    },
})

export default style