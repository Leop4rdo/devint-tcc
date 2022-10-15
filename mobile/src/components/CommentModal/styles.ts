import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/typography";
import { screenHeight, screenWidth } from "../../styles/utils";

export default StyleSheet.create({
    wrapper : {
        width : screenWidth,
        height : '100%',
        position : 'absolute',
        top : 0,
        left : 0,
        zIndex : 89,
    },

    outsidePressHandler : {
        height : '10%',
        backgroundColor : colors.BLACK,
        opacity : .2
    },
    
    modal : {
        width : '100%',
        height : '90%',
        paddingTop : 16,
        paddingHorizontal : 16,

        backgroundColor : colors.BLACK,

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
        borderBottomColor : colors.GRAY,
        borderBottomWidth : 1,
        marginBottom : 8,
        paddingBottom : 8
    },

    profilePic : {
        width : 48,
        height : 48,
        borderRadius : 32
    },

    fakeInput : {
        flex : 1,
        marginLeft : 16,
        height : 48,
        paddingHorizontal : 16,

        justifyContent : 'center',

        backgroundColor : colors.DARK_GRAY,

        borderWidth : 1,
        borderColor : colors.GRAY,
        borderRadius : 16
    },

    fakeInputText : {
        fontFamily : fonts.POPPINS_REGULAR,
        fontSize : 16,
        color : colors.GRAY
    },  
})