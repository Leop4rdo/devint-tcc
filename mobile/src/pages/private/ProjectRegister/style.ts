import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";
import { screenHeight } from "../../../styles/utils";

export default StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.DARK_GRAY
    },

    header : {
        width : "100%",
        height : 56,

        borderBottomWidth : 1,
        borderBottomColor : colors.GRAY,

        flexDirection : "row",
        justifyContent : 'space-between',
        alignItems: 'center',
        paddingHorizontal : 16,

        backgroundColor : colors.BLACK
    },
    
    headerLeftContainer : {
        flexDirection : "row",
        justifyContent : 'center',
        alignItems : 'center'
    },

    title : {
        fontFamily : fonts.POPPINS_MEDIUM,
        color : '#FFF',
        fontSize : 18,
    },

    formWrapper : {
        padding : 16,
        paddingBottom : 160
    },

    bannerContainer : {
        position : 'relative',
        width : "100%",
        aspectRatio : 3,
        backgroundColor : colors.GRAY,
    },

    addBannerBtn : {
        width : 32,
        height : 32,

        backgroundColor : colors.PRIMARY,

        position: 'absolute',
        right : 4,
        bottom : 4,

        justifyContent : 'center',
        alignItems : 'center',

        borderRadius : 1000
    },

    divisor : {
        width : '100%',
        height : 2,
        backgroundColor : colors.GRAY,
        marginVertical : 16,
    },

    input : {
        width : "100%",
        marginHorizontal : 0,
        marginVertical : 0,
        marginBottom : 16
    },

    descInput : {
        alignItems : 'flex-start',
        minHeight : 160,
        paddingVertical : 12,
    },

    label : {
        fontFamily : fonts.POPPINS_REGULAR,
        color : colors.LIGHT_GRAY,
        marginRight : 16
    },

    teamMemberCard : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',

        width : "100%",
        marginBottom : 16
    },

    devPic : {
        marginRight : 16,

        width : 48,
        height : 48,

        borderRadius : 48,
        borderWidth : 1,
        borderColor : colors.PRIMARY
    },

    devName : {
        fontFamily : fonts.POPPINS_REGULAR,
        fontSize : 16,
        color : '#FFF'
    },

    devGithub : {
        fontFamily : fonts.POPPINS_REGULAR,
        fontSize : 12,
        color : colors.LIGHT_GRAY
    }

})