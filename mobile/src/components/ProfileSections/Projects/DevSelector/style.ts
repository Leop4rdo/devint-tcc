import { StyleSheet } from "react-native";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/typography";
import { screenHeight } from "../../../../styles/utils";

export default StyleSheet.create({
    input : {
        marginHorizontal : 0,
        width : "100%",
    },

    optionsWrapper : {
        maxHeight : screenHeight * .25,
        width : "100%",

        backgroundColor : colors.BLACK,
        borderWidth : 2,
        borderRadius : 16,
        borderColor : colors.GRAY,

        overflow : "hidden",
    },

    devOption : {
        width : "100%",
        padding: 16,
        
        borderBottomWidth : 1,
        borderBottomColor : colors.GRAY,
        
        flexDirection : 'row',
        alignItems : 'center',
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