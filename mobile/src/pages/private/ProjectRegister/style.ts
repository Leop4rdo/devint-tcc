import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";

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

})