import { StyleSheet } from "react-native";
import { color, FlipInEasyX } from "react-native-reanimated";
import colors from "../../../styles/colors";
import globalStyles from "../../../styles/global";
import fonts from "../../../styles/typography";


const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.DARK_GRAY,
        flex : 1,
    
    },
    profileContainer:{
        height:200,
  
    },
    backgroundImage:{
        backgroundColor:colors.LIGHT_GRAY,
        width: '100%',
        height:100,
        position: 'absolute'
    },
    
    photoUser:{
        width: 80,
        aspectRatio : 1,
        borderRadius : 48,
       
    },
    devName:{
        color:colors.WHITE,
        fontSize: 16,
        fontFamily: fonts.POPPINS_REGULAR
    },
    devBio:{
        color:colors.WHITE,
        fontSize: 12,
        fontFamily: fonts.POPPINS_REGULAR
    },
    profileData:{
        marginHorizontal:20
    },
    profileDice:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    dice:{
        flexDirection:'column',
        alignItems:'center'
    },
    amount:{
        color:colors.PRIMARY,
        fontSize:16,
        fontFamily: fonts.POPPINS_SEMIBOLD
    },
    text:{
        color:colors.WHITE,
        fontSize:12,
        fontFamily: fonts.POPPINS_REGULAR
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
        alignItems:'center',
        paddingHorizontal: 20,
        borderRadius: 16
    },
    textButton:{
        color: colors.WHITE,
        marginLeft: 10,
        fontSize:12,
        fontFamily: fonts.POPPINS_SEMIBOLD
    },
    publicationData:{
        marginVertical: 16,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    publications:{
        borderBottomColor:colors.DARK_PURPLE,
        borderBottomWidth:1
    },
    textPublications:{
        fontSize:12,
        color: colors.LIGHT_GRAY,
        fontFamily: fonts.POPPINS_SEMIBOLD
    
    }
   
 
})

export default styles