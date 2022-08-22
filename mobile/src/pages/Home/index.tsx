import { Text, View } from "react-native"
import Hello from "../../components/Hello";
import styles from "./style" ;

const HomePage : React.FC = () => {

    return (
        <View style={styles.container}>
            <Hello />
        </View>
    )
}

export default HomePage;