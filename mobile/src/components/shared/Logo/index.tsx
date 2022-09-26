import { View , Text } from "react-native"
import styles from './style';

const Logo: React.FC = () => {

    return (
        <View style={styles.containerLogo}>
            <Text style={styles.logoSymbols}>&#60;</Text>
            <Text style={styles.logo}>  DevInt  </Text>
            <Text style={styles.logoSymbols}>_</Text>
        </View>
    )


}

export default Logo