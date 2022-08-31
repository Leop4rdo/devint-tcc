import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import globalStyles from "../../styles/global";

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
        color: colors.WHITE,
        marginBottom: 40
    },
    signUp: {
        color: colors.LIGHT_PURPLE,
        fontSize: 32,
        marginBottom: 72
    }
})