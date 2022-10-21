import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import globalStyles from "../../../styles/global";
import fonts from "../../../styles/typography";

export default StyleSheet.create({
    page : {
        backgroundColor : colors.DARK_GRAY,
        flex : 1,

    },
    backgroundImage:{
        backgroundColor:colors.LIGHT_GRAY,
        width: '100%',
        height:100,
        position:'absolute',
        opacity:0.6
    },
    
    photoUser:{
        width: 80,
        aspectRatio : 1,
        borderRadius : 48,
        opacity:0.8,
        position:'absolute'
    }, 
    banner:{

    },
        perfil:{
        
    },
       profileEdit:{
        marginTop : 64,
        marginHorizontal: 20
     
    },
})