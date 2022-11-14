
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
        marginBottom : 8
    },

    infoItemText : {
        color : colors.LIGHT_GRAY,
    },

    input : {
        width : '92%',
        borderBottomColor : colors.LIGHT_GRAY,
        borderBottomWidth : 2,
        padding : 0,
        color : '#FFF'        
    },

    skillToken : {
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 24,
        marginTop : 16,
        position : 'relative'
    },

    removeSkillBtn : {
        marginRight : 8
    },

    skillName : {
        marginVertical : 8,
        color : colors.LIGHT_GRAY
    }
})

export default styles