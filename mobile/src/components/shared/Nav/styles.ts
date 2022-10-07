import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const styles = StyleSheet.create({
    navBar : {
        width : '100%',
        height : 56,
        backgroundColor : colors.PRIMARY,
        justifyContent : 'space-between',
        paddingHorizontal : 8,
        alignItems : 'center',
        flexDirection : 'row'
    },

    menuItem : {
        marginHorizontal : 8
    }
})

export default styles