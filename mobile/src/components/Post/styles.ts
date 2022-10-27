import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
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
        fontFamily : fonts.POPPINS_REGULAR,

        marginTop : 16,
        marginBottom : 8
    },


    footer : {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop : 16,
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
    },

    carousel : {
        width : '100%',
        aspectRatio : 1,
    },

    carouselSlide : {
        backgroundColor : colors.BLACK,
        height : '100%',
        aspectRatio : 1
    },

    carouselImg : {
        width : '100%',
        height : '100%'
    },

    carouselFooter : {
        padding : 4,
        backgroundColor : colors.BLACK,
        opacity : .75,
        zIndex : 2,
        borderRadius : 12,

        position: 'absolute',
        right : 12,
        top : 12,

        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : "center"
    },

    carouselFooterLenght : {
        color : colors.LIGHT_GRAY,
        fontFamily : fonts.POPPINS_MEDIUM,
    }
})

export default styles

 

