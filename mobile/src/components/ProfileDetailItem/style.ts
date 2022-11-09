import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import fonts from "../../styles/typography"

const base = {
    borderRadius: 12,
}

const containerStyles = StyleSheet.create({
    base : {
        ...base,
        backgroundColor: colors.BLACK,
        marginHorizontal: 10,
        marginBottom:16,
        paddingHorizontal:10,
        paddingTop: 10
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom : 8
    },
    edit:{
        fontSize: 16,
        color: colors.LIGHT_GRAY,
    
    },
    title : {
        flexDirection : 'row',
        
    },

    text : {
        color : colors.WHITE,
        textTransform: "uppercase",
        fontSize: 16,
        fontFamily: fonts.POPPINS_REGULAR
    },
})

export default containerStyles