import { Text, View } from "react-native"
import Hello from "../../components/Hello";
import FeedbackTextInput from "../../components/Input";
import styles from "./style" ;

const HomePage : React.FC = () => {

    return (
        <View style={styles.container}>
            <FeedbackTextInput onChangeText={(text) => {}}  placeholder="test" />
        </View>
    )
}

export default HomePage;
