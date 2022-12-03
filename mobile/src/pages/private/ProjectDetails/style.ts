import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";
import { screenHeight, screenWidth } from "../../../styles/utils";

export default StyleSheet.create({
    page : {
        backgroundColor : colors.DARK_GRAY,
        flex : 1,
        paddingHorizontal : 16
    },

    titleContainer : {
        width : "100%",
        maxWidth : screenWidth,
        marginTop : 24,
        marginBottom : 8,

        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
    },

    title : {
        fontFamily : fonts.POPPINS_SEMIBOLD,
        color : colors.PRIMARY,
        fontSize : 32,
        maxWidth : screenHeight * .8
    },

    openSource : {
        fontFamily : fonts.POPPINS_SEMIBOLD,
        color : colors.GRAY,
        fontSize : 16,
    },

    banner : {
        width:'100%',
        aspectRatio : 3,
        marginBottom : 8
    },

    member : {
        width : 56,
        aspectRatio : 1,
        marginRight : 8,
        marginBottom : 16,

        borderWidth : 1,
        borderColor : colors.PRIMARY,
        borderRadius : 100
    },

    like:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        color:colors.LIGHT_GRAY,
        fontFamily: fonts.POPPINS_MEDIUM
    },

    desc : {
        fontFamily : fonts.POPPINS_REGULAR,
        color : colors.LIGHT_GRAY,
        fontSize : 20,
        marginVertical : 12,
    },

    memberLabel : {
        fontFamily : fonts.POPPINS_REGULAR,
        color : colors.PRIMARY,
        fontSize : 20,
        marginBottom :8,
    },

    divisor : {
        width : "100%",
        height : 2,
        backgroundColor : colors.PRIMARY,
        borderRadius : 5,
        marginVertical : 24,
    }
})