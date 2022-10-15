import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";
import { screenWidth } from "../../../styles/utils";

export default StyleSheet.create({
    profilePic : {
        width : 48,
        height : 48,
        borderRadius : 32,
        marginRight : 16
    }, 

    content : {
        backgroundColor : colors.DARK_GRAY,
        paddingHorizontal : 16,
        paddingVertical : 8,
        borderRadius : 16,

        width : '75%'
    },

    comment : {
        marginVertical : 16,
        flexDirection : 'row'
    },

    commentOptions : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },

    writterName : {
        color : colors.PRIMARY,
        fontFamily : fonts.POPPINS_SEMIBOLD,
        fontSize : 16,
    },

    textContent : {
        fontFamily : fonts.POPPINS_REGULAR,
        fontSize : 16,
        color : '#FFF',
        marginVertical : 8
    },

    optionText : {
        marginRight : 8,
        color : colors.PRIMARY,
        fontSize : 12,
        fontFamily : fonts.POPPINS_REGULAR
    }
})