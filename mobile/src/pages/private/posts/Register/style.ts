import {StyleSheet} from "react-native";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/typography";

const styles = StyleSheet.create({
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
        paddingHorizontal : 16
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

    publishButton : {
        height : 32,
        width : 100,

        justifyContent : 'center',
        alignItems : 'center',

        borderWidth : 2,
        borderColor : colors.GRAY,
        borderRadius : 12,
    },

    publishButtonText : {
        color : colors.GRAY,
        fontFamily : fonts.POPPINS_MEDIUM,
        fontSize : 14
    }
})

export default styles
