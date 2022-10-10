import { StyleSheet } from "react-native";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/typography";

const styles = StyleSheet.create({
    sidebarItem : {
        width : "100%",
        height : 48,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 16,
        marginVertical : 8,
        borderRadius : 16
    },

    label : {
        fontFamily : fonts.POPPINS_REGULAR,
        fontSize : 20,
        marginLeft : 16
    },
})

export default styles
