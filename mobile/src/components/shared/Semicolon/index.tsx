import { StyleSheet, Text, View } from "react-native"
import colors from "../../../styles/colors"
import fonts from "../../../styles/typography"
import { screenWidth } from "../../../styles/utils"

const Semicolon : React.FC = () => {
    return (
        <View style={style.container}>
            <Text style={style.semicolon}>&#59;</Text>
            <Text style={style.desc}>Parece que chegamos ao fim da linha</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignItems : 'center'
    },

    semicolon : {
        fontFamily : fonts.POPPINS_SEMIBOLD,
        fontSize : 64,
        color : colors.GRAY
    },

    desc : {
        width : screenWidth * .7,
        
        fontFamily : fonts.POPPINS_REGULAR,
        color : colors.GRAY,
        fontSize : 20,
        textAlign : 'center',
    }
})

export default Semicolon