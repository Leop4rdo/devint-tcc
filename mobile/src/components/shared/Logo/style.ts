import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import globalStyles from "../../../styles/global";
import fonts from "../../../styles/typography";

const styles = StyleSheet.create({

    containerLogo:{
        display: 'flex',
        flexDirection: "row",
        justifyContent : "center",
        alignItems: 'center',
        backgroundColor: colors.PRIMARY,
        paddingHorizontal : 24
    },

    logoSymbols: {
        fontSize: 48,
        color: colors.DARK_GRAY,
        fontFamily: fonts.POPPINS_MEDIUM,
    },

    logo: {
        fontSize: 48,
        color: colors.WHITE,
        fontFamily: fonts.POPPINS_REGULAR,
    },
})

export default styles

