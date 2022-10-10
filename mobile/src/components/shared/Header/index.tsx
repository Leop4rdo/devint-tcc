
import { View, ImageBackground } from 'react-native';
import styles from './style';
import Icon from '@expo/vector-icons/AntDesign';
import Logo from '../Logo';

interface ILogo {
    onPressIcon?: any,
    showIcon?: boolean
}

const Header: React.FC<ILogo> = ({onPressIcon , showIcon = true }) => {

    return (
        <View >
            <View style={styles.containerLogo}>
                <Icon name='arrowleft' style={showIcon ? styles.Iconinvisible : styles.IconVisible} onPress={onPressIcon} />
               <Logo/>
            </View>
            <View style={styles.containerImage}>
                <ImageBackground source={require('../../../../assets/horizontal-wave-login-bg.png')} style={styles.horizontalWaveLogin} />
            </View>
        </View>


    )
}


export default Header


