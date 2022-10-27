import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    carousel : {

        width : '100%',
        marginVertical : 24,
        paddingBottom : 16,

        flexDirection : 'row',
        borderBottomWidth : 1,
        borderBottomColor : colors.GRAY
    },

    item : {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        marginHorizontal : 12,
        width : 56,
        height : 56,
        borderRadius : 56
    }
})

export default styles
