
import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";
import globalStyles from "../../../styles/global";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.DARK_GRAY,
        width: '100%',
        height: '100%',
        display: 'flex',
    },

    containerTexts:{
        display: 'flex',
        alignItems: 'center',
        paddingBottom : 48
    },

    TextForgetPassword:{
        fontSize: 32,
        color: colors.PRIMARY,
        textAlign: 'center',
        fontFamily: fonts.POPPINS_SEMIBOLD,
    },

    formContainer : {
        flex : 1,
        justifyContent: 'center',
        paddingVertical : 16
    },

    TextinsertEmail:{
        color: colors.WHITE,
        fontSize:16,
        textAlign: 'center',
        width: 300
    },

    Step1ContainerSendEmail:{
        display: 'flex',
        alignItems: 'center',
    },
    
    Step2ContainerNoReceivedEmail:{
        display: 'flex',
        alignItems: 'center'
    },

    Step2TextNoReceivedEmail:{
        color: colors.WHITE,
        fontSize: 16,
        marginTop: 50
        
    },

})

export default styles