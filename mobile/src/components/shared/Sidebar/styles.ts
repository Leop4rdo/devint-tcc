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
        width : '100%',
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
    },

    topItemContainer : {
        width : '100%',
    },

    divisor : {
        height : 2, 
        backgroundColor : colors.GRAY,
        marginVertical : 16
    },

    profileContainer : {
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
    },

    username : {
        fontFamily : fonts.POPPINS_REGULAR,
        fontSize : 16,
        textAlign: 'center',
        color : colors.PRIMARY
    }
})

export default styles
