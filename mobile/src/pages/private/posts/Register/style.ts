import {StyleSheet} from "react-native";
import { ceil } from "react-native-reanimated";
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

    publishButtonDisabled : {
        height : 32,
        width : 100,

        justifyContent : 'center',
        alignItems : 'center',

        borderWidth : 2,
        borderColor : colors.GRAY,
        borderRadius : 12,
    },

    publishButton : {
        height : 32,
        width : 100,

        justifyContent : 'center',
        alignItems : 'center',

        backgroundColor: colors.PRIMARY,
        borderRadius: 12
    },

    publishButtonTextDisabled : {
        color : colors.GRAY,
        fontFamily : fonts.POPPINS_MEDIUM,
        fontSize : 14
    },

    publishButtonText : {
        color : '#FFF',
        fontFamily : fonts.POPPINS_MEDIUM,
        fontSize : 14
    },

    profileContainer : {
        width: '100%',
        padding : 16,

        flexDirection : 'row',
        alignItems : "center"
    },

    profileImg : {
        width : 48,
        height : 48,
        borderRadius : 64,
        marginRight : 16
    },

    username : {
        fontFamily : fonts.POPPINS_MEDIUM,
        color : '#FFF',
        fontSize : 20
    },

    textArea : {
        flex : 1,
        fontFamily : fonts.POPPINS_REGULAR,
        color: '#FFF',
        padding : 16,
        fontSize : 16,

        textAlignVertical : "top"
    },

    footer : {
        width : '100%',
        paddingVertical : 8,
        paddingHorizontal : 24,
        flexDirection : 'row',
        justifyContent : "space-evenly",
        alignItems : "center",
        backgroundColor : colors.BLACK
    },

    imgContainer : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : "center",
    },

    imgPreview : {
        height : 80,
        aspectRatio : 1,
        marginVertical : 4,
        marginHorizontal : 12
    }
})

export default styles
