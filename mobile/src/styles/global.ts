import { StyleSheet } from "react-native";
import colors from "./colors";
import fonts from "./typography";

const globalStyles = StyleSheet.create({
    text : {
        fontSize: 16,
        fontFamily: fonts.POPPINS_REGULAR,
        color: '#FFF'
    },

    appTitle_medium : {
        fontSize: 40,
        fontFamily: fonts.POPPINS_SEMIBOLD,
        color: '#FFF'
    },

    centerItemContainer : {
        alignItems : 'center',
        justifyContent: "space-between"
    },

    linkRed : {
        fontSize: 16,
        fontFamily: fonts.POPPINS_LIGHT,
        color: colors.RED,
        textDecorationLine: "underline"
    }
})

export default globalStyles
