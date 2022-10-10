import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/typography";


const styles = StyleSheet.create({

    cardPost: {
        width: "100%",
        padding : 16,

        backgroundColor: colors.BLACK,

        borderRadius : 16,
        marginVertical : 8
    },

    header : {
        flexDirection: "row",
        alignItems: "center",
        marginBottom : 16
    },
    
    profilePic : {
        width : 48,
        height : 48,
        marginRight : 16,

        borderRadius : 48
    },

    devName : {
        color: '#FFF',
        fontFamily : fonts.POPPINS_MEDIUM,
        marginBottom : -4
    },

    devGithub : {
        color : colors.GRAY,
        fontFamily : fonts.POPPINS_REGULAR,
        fontSize : 12
    },

    content : {
        color : colors.LIGHT_GRAY,
        fontFamily : fonts.POPPINS_REGULAR
    },


    footer : {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop : 16,
        paddingTop : 8,
        
        borderTopWidth : 1,
        borderTopColor : colors.GRAY
    },

    footerButtonContainer : {
        flexDirection: "row",
        alignItems : 'center'
    },

    footerButtonLabel : {
        color : colors.LIGHT_GRAY,
        fontSize : 14,
        fontFamily : fonts.POPPINS_LIGHT,

        marginHorizontal : 8
    }
})

export default styles

 

