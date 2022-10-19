import { cloneElement } from "react";
import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import globalStyles from "../../../styles/global";
import fonts from "../../../styles/typography";
import { screenHeight, screenWidth } from "../../../styles/utils";

export default StyleSheet.create({
    page : {
        backgroundColor : colors.DARK_GRAY,
        flex : 1,
        paddingHorizontal : 16
    },

    floatingButton : {
        position : "absolute",
        right : 16,
        bottom : 16,

        padding : 12,

        borderRadius : 100,
        backgroundColor : colors.PRIMARY,

        zIndex : 2
    },
})
