
import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import globalStyles from "../../../styles/global";
import fonts from "../../../styles/typography";
import { clamp, screenHeight } from "../../../styles/utils";

const styles = StyleSheet.create({
    containerLogo:{
        display: 'flex',
        width: '100%',
        height: clamp(80, screenHeight * 0.4, 100),
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.PRIMARY,
        marginBottom: -8,
    },


    containerImage: {
        flexBasis: clamp(80, screenHeight * 0.4, 100),
        display: 'flex',
        width: '100%',
    },

    horizontalWaveLogin:{
        flex: 1,
        height: 60,  
    },

    IconVisible:{
        fontSize: 40,
        color: colors.WHITE,
        position : 'absolute',
        left : 16,
    },

    Iconinvisible:{
        color: 'transparent',
        with:0,
        height:0
    },
})

export default styles