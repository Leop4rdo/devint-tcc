import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";

const styles = StyleSheet.create({
    sidebar : {
        width : '75%',
        height : '100%',
        backgroundColor : colors.BLACK,
        position : 'absolute',
        padding : 24,
        alignItems : 'center',
        justifyContent : 'space-between',
    },

    exitContainer : {
        width : '75%',
        height : 48,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 16,
        
    },

    exitIcon : {
        fontFamily : fonts.POPPINS_SEMIBOLD,
        fontSize : 24,
        marginRight : 16,
        color : '#FFF'
    },

    exitText : {
        fontFamily : fonts.POPPINS_REGULAR,
        color : colors.LIGHT_GRAY,
        fontSize : 20
    }
})

export default styles