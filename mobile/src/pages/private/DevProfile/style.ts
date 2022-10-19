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
        backgroundColor: colors.DARK_GRAY,
 
    },
    backgroundImage:{
        backgroundColor:colors.LIGHT_GRAY,
        width: '100%',
        height:100,
        position: "absolute"
    },
    
    photoUser:{
        width: 80,
        aspectRatio : 1,
        borderRadius : 48,
       
    },
    devName:{
        color:colors.WHITE
    },
    diceProfile:{
        marginHorizontal:20
    },
    profileEdit:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop : 64,
        marginHorizontal: 20
    },
    buttonEdit:{
        backgroundColor: colors.PRIMARY,
        width:140,
        height:21,
        flexDirection : 'row',
        paddingHorizontal: 20,
        borderRadius: 16
    },
    textButton:{
        color: colors.WHITE,
        marginLeft: 10
    }
 
})

export default styles