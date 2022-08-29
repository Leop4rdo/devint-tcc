import { Text, View } from "react-native"
import Hello from "../../components/Hello";
import FeedbackTextInput from "../../components/utils/FeedbackInput";
import styles from "./style" ;
import ButtonComponent from "../../components/utils/Button";

const HomePage : React.FC = () => {

    return (
        <View style={styles.container}>
            <FeedbackTextInput onChangeText={(text) => {}}  placeholder="test" />
            <ButtonComponent icon="home" onPress={() => {}}/>
        </View>
    )
}

export default HomePage;
