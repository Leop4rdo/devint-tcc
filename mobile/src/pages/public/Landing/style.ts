import { cloneElement } from "react";
import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import globalStyles from "../../../styles/global";
import fonts from "../../../styles/typography";
import { screenHeight, screenWidth } from "../../../styles/utils";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.DARK_GRAY,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',

    },

    containerlogoSymbols: {
        flexBasis: 180,
        display: 'flex',
        flexDirection: "row",
        width: '100%',
        backgroundColor: 'aqua',
    },

    horizontalWaveLogin:{
        flex: 1,
        resizeMode: "center",
        justifyContent: "center",
        alignItems: "center"
    },

    teste:{
        top:20,
        position:'absolute',
        display: 'flex',
        flexDirection: "row",
    },
    logoSymbols: {
        fontSize: 50,
        color: colors.PRIMARY,
        marginTop: -16,
    },
    logo: {
        fontSize: 40,
        color: colors.WHITE,
        margin: -10,
        fontFamily: fonts.POPPINS_REGULAR,
        
    },

    textWelcome: {
        fontSize: 32,
        color: colors.LIGHT_PURPLE,
        textAlign: 'center',
        marginBottom: 75,
        fontFamily: fonts.POPPINS_SEMIBOLD
    },

    textMessageWelcome: {
        color: colors.WHITE,
        fontSize: 16,
        width: 320,
        textAlign: 'center',
        marginBottom: 70,
        fontFamily: fonts.POPPINS_REGULAR
    },

    containerButtons: {
        display: 'flex',
        alignItems: 'center'
    }

})