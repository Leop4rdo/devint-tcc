import { StyleSheet } from "react-native";
import { color, FlipInEasyX } from "react-native-reanimated";
import colors from "../../../styles/colors";
import globalStyles from "../../../styles/global";
import fonts from "../../../styles/typography";
import { screenHeight, screenWidth } from "../../../styles/utils";


const styles = StyleSheet.create({
    section : {
        paddingHorizontal : 16,
        paddingVertical : 16,
        minHeight : '50%'
    },

    page : {
        backgroundColor : colors.DARK_GRAY,
        minHeight : screenHeight
    },

    header:{
        paddingHorizontal : 0
    },

    banner:{
        backgroundColor:colors.LIGHT_GRAY,
        width: screenWidth,
        aspectRatio : 360/90,
        resizeMode : 'contain',
    },

    photoUser:{
        width: 100,
        aspectRatio : 1,
        borderRadius : 48,
        borderColor : colors.PRIMARY,
        borderWidth : 1,
        marginBottom : 12
    },

    followButton : {
        paddingVertical : 8,
        paddingHorizontal : 16,
        marginBottom : 12,
        marginLeft : 12,

        borderRadius : 16,

        backgroundColor : colors.PRIMARY
    },

    followButtonText : {
        color : '#FFF',
        fontFamily : fonts.POPPINS_REGULAR
    },

    devName:{
        color:colors.WHITE,
        fontSize: 16,
        fontFamily: fonts.POPPINS_REGULAR,
        marginBottom : 8
    },

    devBio:{
        color:colors.LIGHT_GRAY,
        fontSize: 12,
        fontFamily: fonts.POPPINS_REGULAR,
        marginBottom : 12,
        maxHeight : 120

    },

    followDataContainer:{
        flexDirection:'row',
        paddingHorizontal:24,
    },

    followData:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent : 'center',
        marginRight : 48
    },

    amount:{
        color:colors.PRIMARY,
        fontSize:16,
        fontFamily: fonts.POPPINS_SEMIBOLD
    },

    text:{
        color:colors.LIGHT_GRAY,
        fontSize:12,
        fontFamily: fonts.POPPINS_REGULAR
    },


    nav:{
        marginVertical: 16,
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderBottomColor: colors.LIGHT_GRAY,
        borderBottomWidth: 1
    },
    navItem:{
        borderBottomColor:colors.PRIMARY,
        borderBottomWidth:2.5
    },
    selectedNavItem:{
        fontSize:12,
        paddingHorizontal : 16,
        paddingTop : 8,
        color: colors.WHITE,
        fontFamily: fonts.POPPINS_SEMIBOLD,
    },

    editFloatBtn : {
        position : 'absolute',
        width : 32,
        height : 32,

        justifyContent : 'center',
        alignItems : 'center',

        backgroundColor : colors.PRIMARY,

        borderWidth : 1,
        borderColor : colors.BLACK,
        borderRadius : 100

    },

    bioInput : {
        borderColor : colors.GRAY,
        borderWidth : 2,
        borderRadius : 8,

        padding : 16,

        marginBottom : 24,

        color : '#FFF',
        fontSize : 12,
        fontFamily : fonts.POPPINS_REGULAR,

        maxHeight : 100
    }
})

export default styles