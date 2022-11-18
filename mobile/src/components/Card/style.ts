import { StyleSheet } from "react-native";
import colors from "../../styles/colors";


export default StyleSheet.create({
    card:{
        height:' 50%',
        width:'90%',
        backgroundColor: colors.BLACK,
        paddingHorizontal:12,
        paddingVertical:12
    },
    banner:{
        height: '40%',
        width:'100%',
        backgroundColor:colors.DARK_GRAY
    },
    contents:{

    },
    containerTitle: {
        display:"flex",
        flexDirection:"row",
        marginVertical: 12,
        alignItems:"center",
        
    },
    title:{
        color: colors.WHITE,
        marginRight: 8,
        fontSize:16
    },
    typeProject:{
        color: colors.WHITE,
        fontSize:12,
    },
    description:{

    },




})

