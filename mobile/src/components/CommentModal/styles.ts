import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/typography";
import { screenHeight, screenWidth } from "../../styles/utils";

export default StyleSheet.create({
    modal : {
        width : screenWidth,
        height : '90%',
        paddingTop : 16,
        paddingHorizontal : 16,

        backgroundColor : colors.BLACK,

        position : 'absolute',
        bottom : 0,

        borderTopRightRadius : 16,
        borderTopLeftRadius : 16,

        zIndex : 90

    },  

    header : {
        flexDirection : 'row',
        justifyContent : "space-between",
        alignItems : 'center',
        marginBottom : 8
    },

    boldText : {
        fontFamily : fonts.POPPINS_SEMIBOLD,
        fontSize : 16,
        color : '#FFF',
        marginRight : 8,
    },

    commentAmount : {
        fontFamily : fonts.POPPINS_REGULAR,
        color : colors.LIGHT_GRAY
    },

    newCommentContainer : {
        flexDirection : 'row',
        justifyContent : "space-between",
        alignItems : "center",
        marginBottom : 8
    },

    profilePic : {
        width : 48,
        height : 48,
        borderRadius : 32
    },

    newCommentInput : {
        flex : 1,
        marginHorizontal : 12
    }
})