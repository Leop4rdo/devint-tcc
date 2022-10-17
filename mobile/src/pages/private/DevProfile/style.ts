import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../../styles/colors";
import globalStyles from "../../../styles/global";

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.DARK_GRAY,
        flex : 1,
    
    },
    profileContainer:{
        height:200,
        backgroundColor: colors.DARK_GRAY
 
    },
    backgroundImage:{
        backgroundColor:colors.LIGHT_GRAY,
        width: '100%',
        height:'55%',
        position: "absolute"
    },
    
    photoUser:{
        height: 90,
        width: 100,
        borderRadius : 48,
        marginTop: 70,
        marginLeft:20
    },
    devName:{
        color:colors.WHITE
    },
    diceProfile:{
        marginLeft:20
    },
    profileEdit:{
        display:'flex',
        flexDirection:'row'
    },
 
})

export default styles