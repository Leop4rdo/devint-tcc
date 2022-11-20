import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../styles/colors";
import fonts from "../../styles/typography";



export default StyleSheet.create({
    card:{
        height:' 50%',
        width:'95%',
        backgroundColor: colors.BLACK,
        paddingHorizontal:12,
        paddingVertical:12,
        borderRadius:16
    },
    banner:{
        height: '40%',
        width:'100%',
        backgroundColor:colors.DARK_GRAY
    },
    contents:{
    },
    containerProject: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between"
        
    },
    containerTitle:{
        display: "flex",
        flexDirection:"row",
        alignItems:"center",
 
    },
    containerEdit:{
        color: colors.GRAY,
        fontSize: 20
    },
    title:{
        color: colors.PRIMARY,
        marginRight: 8,
        fontSize:16,
        fontFamily: fonts.POPPINS_SEMIBOLD
    },
    typeProject:{
        color: colors.WHITE,
        fontSize:12,
        fontFamily: fonts.POPPINS_REGULAR
    },
    description:{
      color: colors.GRAY

    },
    collaborator:{
        height: 10
    },
    item:{
        marginRight:8,
        marginVertical:8
    },
    avatar:{
        height:56,
        width:56,
        borderRadius:50,
        backgroundColor: colors.WHITE,
        borderColor: colors.PRIMARY,
        borderWidth:1
    },
    data:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
      
    },
    github:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        color: colors.GRAY,
        fontSize:16,
        fontFamily: fonts.POPPINS_REGULAR
    },
    like:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        color:colors.WHITE,
        fontFamily: fonts.POPPINS_MEDIUM
        
    },
    icon:{
        fontSize:24,
        marginRight:8
    }




})

