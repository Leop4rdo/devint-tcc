
import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

import fonts from "../../../styles/typography";


export default StyleSheet.create({
    container: {
        backgroundColor: colors.DARK_GRAY,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',

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

    containerLogo:{
        width: '100%',
        display: 'flex',
        height: 100,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.LIGHT_PURPLE,
        marginBottom: -8
    
        
        
    },
    logoSymbols: {
        fontSize: 50,
        color: colors.BLACK,
        marginTop:22,
        fontFamily: fonts.POPPINS_MEDIUM
       
    },
    logo: {
        fontSize: 40,
        color: colors.WHITE,
        marginLeft: -20,
        marginRight: -20,
        fontFamily: fonts.POPPINS_REGULAR,
        marginTop: 30
        
    },

    textWelcome: {
        fontSize: 40,
        color: colors.LIGHT_PURPLE,
        textAlign: 'center',
        marginBottom: 75,
        fontFamily: fonts.POPPINS_SEMIBOLD
    },

    textMessageWelcome: {
        color: colors.WHITE,
        fontSize: 16,
        width: 320,
        textAlign: 'center',
        marginBottom: 70,
        fontFamily: fonts.POPPINS_REGULAR
    },

    containerButtons: {
        display: 'flex',
        alignItems: 'center'
    },

   


})