
import { View, Text, ImageBackground } from 'react-native';
import { IPageProps } from "../../../navigators"
import styles from './style'


const Logo: React.FC = () => {

    return (
        <View >

            <View style={styles.containerLogo}>
                <Text style={styles.logoSymbols}>&#60;</Text>
                <Text style={styles.logo}>  DevInt  </Text>
                <Text style={styles.logoSymbols}>_</Text>
            </View>

            <View style={styles.containerImage}>
                <ImageBackground source={require('../../../../assets/horizontal-wave-login-bg.png')} style={styles.horizontalWaveLogin} />
            </View>
        </View>


    )
}


export default Logo


