import { Text, View } from "react-native"
import Hello from "../../../components/Hello";
import FeedbackTextInput from "../../../components/shared/FeedbackInput";
import ButtonComponent from "../../../components/shared/Button";

const HomePage : React.FC = () => {

    return (
        <View>
            <FeedbackTextInput onChangeText={(text) => {}}  placeholder="test" />
            <ButtonComponent icon="home" onPress={() => {}}/>
        </View>
    )
}

export default HomePage;
