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
        width : "100%",
        minHeight : screenHeight,
        padding : 16,
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

    addBtn : {
        height : 48,
        marginLeft : 8,
        aspectRatio : 1,
        borderRadius : 16,
        backgroundColor : colors.PRIMARY,
        alignItems : 'center',
        justifyContent : 'center'
    }
})