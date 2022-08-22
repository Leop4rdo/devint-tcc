import { Text, View } from "react-native"
import Hello from "src/components/Hello";
import styles from "../../styles/pages/Home" ;

const HomePage : React.FC = () => {

    return (
        <View style={styles.container}>
            <Hello />
        </View>
    )
}

export default HomePage;