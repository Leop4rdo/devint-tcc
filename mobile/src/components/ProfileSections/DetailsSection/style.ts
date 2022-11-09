
import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/typography";

const styles = StyleSheet.create({
    

    dataContainer : {
        padding : 16,
        marginBottom : 16,

        backgroundColor : colors.BLACK,

        borderRadius : 8,
    },

    header : {
        justifyContent : 'space-between',
        flexDirection : 'row',
        marginBottom : 12
    },

    title : {
        color : '#FFF',
        fontFamily : fonts.POPPINS_SEMIBOLD,
        fontSize : 16,
        marginLeft : 8
    },

    infoItem : {
        flexDirection : 'row',
        alignItems : 'center',
    },

    infoItemText : {
        color : colors.LIGHT_GRAY,
        marginLeft : 8
    }
})

export default styles