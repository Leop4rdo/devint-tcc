
import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.DARK_GRAY,
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    containerTexts:{
        display: 'flex',
        alignItems: 'center'
    },
    TextForgetPassword:{
        fontSize: 32,
        color: colors.LIGHT_PURPLE,
        width: 250,
        textAlign: 'center',
        fontFamily: fonts.POPPINS_SEMIBOLD,
        marginBottom: 16
    },
    TextinsertEmail:{
        color: colors.WHITE,
        fontSize:16,
        marginBottom: 100,
        textAlign: 'center'
    },
    ContainerSendEmail:{
        display: 'flex',
        alignItems: 'center',
    },
    




})

export default styles