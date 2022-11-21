import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../../../styles/colors";
import fonts from "../../../../styles/typography";



export default StyleSheet.create({
    card:{
        width:'100%',
        backgroundColor: colors.BLACK,
        padding:12,
        borderRadius:12,
        marginVertical : 12
    },
    banner:{
        width:'100%',
        aspectRatio : 3,
        backgroundColor:colors.DARK_GRAY,
        marginBottom : 8
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
        flexWrap : 'wrap'
    },
    title:{
        color: colors.PRIMARY,
        marginRight: 8,
        fontSize:24,
        fontFamily: fonts.POPPINS_SEMIBOLD
    },
    typeProject:{
        color: colors.WHITE,
        fontSize:16,
        fontFamily: fonts.POPPINS_REGULAR
    },
    description:{
        color: colors.GRAY,
        fontFamily : fonts.POPPINS_REGULAR,
        fontSize : 16,
        marginBottom : 8
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
        justifyContent : 'center',
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
    },

    member : {
        width : 48,
        aspectRatio : 1,
        marginRight : 8,
        marginBottom : 16,

        borderWidth : 1,
        borderColor : colors.PRIMARY,
        borderRadius : 100
    }




})

