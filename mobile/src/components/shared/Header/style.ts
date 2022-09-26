
import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import globalStyles from "../../../styles/global";
import fonts from "../../../styles/typography";

const styles = StyleSheet.create({
    containerLogo:{
        width: '100%',
        display: 'flex',
        height: 100,
        flexDirection: "row",
      
        alignItems: 'center',
        backgroundColor: colors.PRIMARY,
        marginBottom: -8,
    },
    logoSymbols: {
        fontSize: 50,
        color: colors.BLACK,
        marginTop:22,
        fontFamily: fonts.POPPINS_MEDIUM,
    },

    logo: {
        fontSize: 40,
        color: colors.WHITE,
        marginLeft: -20,
        marginRight: -20,
        fontFamily: fonts.POPPINS_REGULAR,
        marginTop: 30
        
    },

    containerImage: {
        flexBasis: 110,
        display: 'flex',
        width: '100%',
    },

    horizontalWaveLogin:{
        flex: 1,
        height: 60,  
    },

    IconVisible:{
        fontSize: 40,
        color: colors.WHITE,
        marginTop:16,
        marginRight:54,
        marginLeft: 15
         
    },

    Iconinvisible:{
        color: 'transparent',
        marginLeft: 94,
        with:0,
        height:0
    },

    
    
})

export default styles