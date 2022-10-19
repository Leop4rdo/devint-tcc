import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../../styles/colors";
import { screenHeight, screenWidth } from "../../../styles/utils";

export default StyleSheet.create({
    wrapper : {
        position : 'absolute',
        top : 0,
        width : screenWidth,
        height : '100%',
        paddingBottom : 64,

        backgroundColor : '#0004',

        zIndex : 9999,
    },

    outsidePressHandler : {
        height : '100%'
    },

    form : {
        width : '100%',
        height : 64,
        paddingHorizontal : 8,

        flexDirection : 'row',
        alignItems : 'center',
        
        backgroundColor : colors.DARK_GRAY
    },

    input : {
        flex : 1,
        marginRight : 8,
    }
})