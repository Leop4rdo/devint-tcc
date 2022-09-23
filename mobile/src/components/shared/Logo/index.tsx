
import { View, Text, ImageBackground } from 'react-native';
import styles from './style';
import Icon from '@expo/vector-icons/AntDesign';

interface ILogo {
    onPressIcon?: any,
    styleIcon?: 'IconVisible' | 'Iconinvisible'
}

const Logo: React.FC<ILogo> = ({onPressIcon , styleIcon = 'IconVisible' }) => {

    return (
        <View >

            <View style={styles.containerLogo}>
                <Icon name='arrowleft' style={styles[styleIcon]} onPress={onPressIcon} />
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


