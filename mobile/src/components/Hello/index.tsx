import { Text, View } from "react-native";
import styles from './style'

const Hello : React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.hello}>Hello World</Text>
            <Text style={styles.message}>This is a component</Text>
        </View>
    );
}

export default Hello;