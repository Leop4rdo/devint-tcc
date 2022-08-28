import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const base = {
    width : 200,
    height : 48,
    margin : 16,

    borderWidth: 2,
    borderRadius: 12,
    
    backgroundColor : colors.DARK_GRAY,
}

const buttonStyles = StyleSheet.create({
    base : {
        ...base,
        borderColor: colors.PRIMARY,
        justifyContent: 'center',
        alignItems : 'center',
        flexDirection : 'row',
    },

    basePressed : { backgroundColor: colors.BLACK },

    text : {
        color : colors.PRIMARY,
        textTransform: "uppercase",
        fontSize: 20
    }
})

export default buttonStyles